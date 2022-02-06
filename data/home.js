const { getTalks } = require("./talks")
const { getArticles } = require("./blog")
const path = require("path")

const createHomePage = async (createPage, graphql) => {
    console.log("Creating home page...")
    const homeTemplate = path.resolve(`./src/templates/home.js`)
    const articles = await getArticles(graphql)
    const talks = await getTalks(graphql)
    const videos = [
      {
        url: "https://www.youtube.com/embed/JM1-WDihR8M"
      },
      {
        url: "https://www.youtube.com/embed/8lHpcXfxSmw"
      },
      {
        url: "https://www.youtube.com/embed/JpFYfetOKG4"
      }
    ]
    
    createPage({
        path: "/",
        component: homeTemplate,
        context: {
          siteMeta: {
            siteUrl: "/"
          },
          articles: articles.new.slice(0, 3),
          talks: talks.filter(p => p.node.fileAbsolutePath.match(/talks/g)).slice(0, 3),
          videos: videos
        },
      })
}

module.exports = { createHomePage }