import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import { Box } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import NavigationBar from "../components/navigation-bar"

class TalkHome extends React.Component {
  render() {
    const { pageContext } = this.props
    const posts = pageContext.posts
    const url = pageContext.siteMeta.siteUrl
    console.log(url)

    return (
      <Layout location={this.props.location}>
        <SEO title='Talks' featureImage='https://storage.googleapis.com/jawahar-tech/Profile.jpg'/>
        <Box style={{ margin: 24 }}/>

        <NavigationBar url={url}/>

        <Box style={{ margin: 40 }}/>

        {posts.map(({ node }) => (
          <BlogTile blog={node} key={node.fields.slug}/>
        ))}

        {/*TODO: Fix this later*/}
        {/*<PaginationBar next={pageContext.next} prev={pageContext.prev}/>*/}
      </Layout>
    )
  }
}

export default TalkHome
