const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const getArticles = async graphql => {
  const result = await graphql(
    `
      {
        allLegacyContent(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage
              }
            }
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    throw result.errors
  }

  return { legacy: result.data.allLegacyContent.edges, new: result.data.allMarkdownRemark.edges }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const legacyBlogPost = path.resolve(`./src/legacy/legacy-post-template.jsx`)

  const posts = await getArticles(graphql)
  const constructPage = (post, index, component) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component,
      context: {
        slug: post.node.fields.slug,
      },
    })
  }

  posts.new.forEach((post, index) => constructPage(post, index, blogPost))
  posts.legacy.forEach((post, index) => constructPage(post, index, legacyBlogPost))
  const allPosts = [...posts.new, ...posts.legacy]
  createPaginatedPages(allPosts, 0, 1, createPage)
}

const createPaginatedPages = (posts, offset, pageIndex, createPage) => {
  const filteredPosts = posts.slice(offset, offset + 5)

  if (filteredPosts.length === 0) {
    return
  }

  const component = path.resolve(`./src/templates/index.js`)
  const url = `blog/${pageIndex}`
  const next = offset < posts.length && `blog/${pageIndex + 1}`
  const prev = pageIndex > 1 && `blog/${pageIndex - 1}`

  createPage({
    path: url,
    component,
    context: {
      posts: filteredPosts,
      siteMeta: {},
      next,
      prev
    },
  })

  createPaginatedPages(posts, offset + 5, pageIndex + 1, createPage)
}

const createUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  // Legacy blogs
  if (node.internal.type === `LegacyContent`) {
    createNodeField({
      name: `slug`,
      node,
      value: `/${node.relativePath.replace(".json", "")}/`,
    })
  }

  if (node.internal.type !== "File" || node.internal.mediaType !== "application/json") return
  const { createNode } = actions

  // read the raw html content
  const nodeContent = await loadNodeContent(node)
  const { meta, content } = JSON.parse(nodeContent)

  console.log("==== Building Legacy Node ====")
  console.log(meta.title)

  // set up the new node.
  const htmlNodeContent = {
    id: node.relativePath,
    internal: {
      contentDigest: node.internal.contentDigest,
      type: "LegacyContent",
    },
    relativePath: node.relativePath,
    excerpt: meta.excerpt,
    html: content,
    frontmatter: {
      title: meta.title,
      description: meta.excerpt,
      date: meta.published_date,
      featuredImage: meta.featuredImage,
    },
  }
  createNode(htmlNodeContent)
}
