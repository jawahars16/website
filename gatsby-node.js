const createBlogPages = require("./data/blog")
const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem")
const createLegacyNodes = require("./data/legacy")
const createPaginatedPages = require("./data/pagination")
const path = require("path")
const createTalks = require("./data/talks")
let legacyNodesCreated = false

exports.createPages = async ({ graphql, actions }) => {
  try {
    const { createPage } = actions

    if (legacyNodesCreated) {
      console.log("Creating pages ...")
      await createBlogPages(createPage, graphql)
      await createTalks(createPage, graphql)
    } else {
      console.log("Nodes not ready...")
    }
  } catch (e) {
    console.error(e)
  }
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === `MarkdownRemark`) {
    console.log('md file')
    console.log(node.fileAbsolutePath)
    const value = createFilePath({ node, getNode })
    const prefix = node.fileAbsolutePath.includes("talks") ? "talks" : "blog"
    createNodeField({
      node,
      name: "slug",
      value: `/${prefix}${value}`,
    })
  }

  if (node.internal.type === `LegacyContent`) {
    const value = `/blog/${node.relativePath.replace(".json", "")}`
    createNodeField({
      node,
      name: "slug",
      value,
    })
  }

  if (node.internal.type !== "File" || node.internal.mediaType !== "application/json") return
  await createLegacyNodes(node, loadNodeContent, createNode)
  legacyNodesCreated = true
}
