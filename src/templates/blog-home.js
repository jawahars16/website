import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import { Box } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import PaginationBar from "../components/pagination-bar"
import NavigationBar from "../components/navigation-bar"

class BlogHome extends React.Component {
  render() {
    const { pageContext } = this.props
    const posts = pageContext.posts
    const url = pageContext.siteMeta.siteUrl

    return (
      <Layout location={this.props.location}>
        <SEO title='Blog' featureImage='https://storage.googleapis.com/jawahar-tech/Profile.jpg'/>
        <Box style={{ margin: 24 }}/>
        <NavigationBar url={url}/>

        <Divider variant="middle" style={{ margin: 0 }}/>

        <Box style={{ margin: 40 }}/>

        {posts.map(({ node }) => (
          <BlogTile blog={node} key={node.fields.slug}/>
        ))}

        <PaginationBar next={pageContext.next} prev={pageContext.prev}/>
      </Layout>
    )
  }
}

export default BlogHome
