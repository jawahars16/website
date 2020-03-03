const createPaginatedPages = require("./pagination")
const path = require('path')

const constructPage = (post, index, component, createPage) => {
  console.log("=== Building Talk page ===")
  console.log(post.node.fields.slug)
  createPage({
    path: post.node.fields.slug,
    component,
    context: {
      slug: post.node.fields.slug,
    },
  })
}

const createTalks = async (createPage, graphql) => {
  console.log("Creating talk pages...")
  const posts = await getTalks(graphql)
  createPages(posts.filter(p => p.node.fileAbsolutePath.match(/talks/g)), createPage)
}

const createPages = (posts, createPage) => {
  const blogPost = path.resolve(`./src/templates/talk-page.js`)
  posts.forEach((post, index) => constructPage(post, index, blogPost, createPage))
  createPaginatedPages(posts, 0, 1, createPage, "talks", "./src/templates/talk-home.js")
}

const getTalks = async graphql => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              fileAbsolutePath
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                videoLink
                viewTime
                slidesLink
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

  return result.data.allMarkdownRemark.edges
}

module.exports = createTalks