const path = require("path")

const createPaginatedPages = (posts, offset, pageIndex, createPage, slug, template) => {
  const postsPerPage = 6
  const filteredPosts = posts.slice(offset, offset + postsPerPage)

  if (filteredPosts.length === 0) {
    return
  }

  const component = path.resolve(template)
  let url = `${slug}/${pageIndex}`
  let next = offset < posts.length ? `${slug}/${pageIndex + 1}` : undefined
  let prev = pageIndex > 1 ? `${slug}/${pageIndex - 1}` : undefined

  if (pageIndex - 1 === 1) {
    prev = slug === "blog" ? "/" : slug
  }

  if (pageIndex === 1) {
    url = slug === "blog" ? "/" : `/${slug}`
  }

  createPage({
    path: url,
    component,
    context: {
      posts: filteredPosts,
      siteMeta: {},
      next,
      prev,
    },
  })

  createPaginatedPages(posts, offset + postsPerPage, pageIndex + 1, createPage, slug, template)
}

module.exports = createPaginatedPages