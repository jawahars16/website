const readTimeEstimate = require('../node_modules/read-time-estimate/dist/read-time-estimate');

const createLegacyBlogNodes = async (node, loadNodeContent, createNode) => {

  console.log('Creating legacy nodes')
  // read the raw html content
  const nodeContent = await loadNodeContent(node)
  const { meta, content } = JSON.parse(nodeContent)

  console.log("==== Building Legacy Node ====")
  const {
    humanizedDuration
  } = readTimeEstimate(nodeContent, 275, 12, 500, ['img', 'Image'])

  // set up the new node.
  const htmlNodeContent = {
    id: node.relativePath,
    internal: {
      contentDigest: node.internal.contentDigest,
      type: "LegacyContent",
    },
    readingTime: {
      text: `${humanizedDuration} read`
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

module.exports = createLegacyBlogNodes