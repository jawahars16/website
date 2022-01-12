const path = require("path")

const createPaginatedPages = (posts, offset, pageIndex, createPage, slug, template) => {
  // **** Disable Pagination **** //
  // const postsPerPage = 100
  // const filteredPosts = posts.slice(offset, offset + postsPerPage)

  // if (filteredPosts.length === 0) {
  //   return
  // }
  // **************************** //

  const component = path.resolve(template)
  let url = `/${slug}`
  let next = offset < posts.length ? `${slug}/${pageIndex + 1}` : undefined
  let prev = pageIndex > 1 ? `${slug}/${pageIndex - 1}` : undefined
  // console.log(pageIndex)
  console.log(url)

  // if (pageIndex - 1 === 1) {
  //   prev = slug === "blog" ? "/" : slug
  // }

  // if (pageIndex === 1) {
  //   url = slug === "blog" ? "/" : `/${slug}`
  // }

  createPage({
    path: url,
    component,
    context: {
      posts: posts,
      siteMeta: {
        siteUrl: url
      },
      next,
      prev,
    },
  })

  // createPaginatedPages(posts, offset + postsPerPage, pageIndex + 1, createPage, slug, template)
}

module.exports = createPaginatedPages