const createPaginatedPages = require("./pagination")
const path = require("path")

const constructPage = (post, index, component, createPage, isLegacy) => {
  console.log("=== Building Page ===")
  console.log(post.node.fields.slug)
  const slug = post.node.fields.slug

  createPage({
    path: slug,
    component,
    context: {
      slug: slug,
    },
  })

  if (isLegacy) {
    const legacySlug = post.node.fields.slug.replace("blog", "home")
    createPage({
      path: legacySlug,
      component,
      context: {
        slug: slug,
      },
    })
  }
}

const createBlogPages = async (createPage, graphql) => {
  console.log("Creating blog posts...")
  const pages = await getArticles(graphql)
  createPages(pages, createPage)
}

const createPages = (posts, createPage) => {
  const blogPost = path.resolve(`./src/templates/blog-page.js`)
  const legacyBlogPost = path.resolve(`./src/legacy/legacy-post-template.jsx`)

  posts.new.forEach((post, index) => constructPage(post, index, blogPost, createPage))
  posts.legacy.forEach((post, index) => constructPage(post, index, legacyBlogPost, createPage, true))
  const allPosts = [...posts.new, ...posts.legacy]
  createPaginatedPages(allPosts, 0, 1, createPage, "blog", "./src/templates/blog-home.js")
}

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
              readingTime {
                text
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
                readingTime {
                  text
                }
              }
              excerpt
              fileAbsolutePath
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
                tileImage {
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

  return {
    legacy: result.data.allLegacyContent.edges,
    new: result.data.allMarkdownRemark.edges.filter(p => p.node.fileAbsolutePath.match(/blog/g)),
  }
}

module.exports = createBlogPages