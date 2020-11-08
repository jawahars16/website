import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import { Box } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import PaginationBar from "../components/pagination-bar"
import NavigationBar from "../components/navigation-bar"
import Upcoming from "../components/upcoming"


class BlogHome extends React.Component {
  render() {
    const { pageContext } = this.props
    const posts = pageContext.posts
    const url = pageContext.siteMeta.siteUrl

    return (
      <Layout location={this.props.location}>
        <SEO title='Blog'
             featureImage='https://jawahar.tech/static/9ffa033d65c932ec90c8c49eeee9c15e/6bf53/Profile.jpg'/>
        <Box style={{ margin: 24 }}/>
        <NavigationBar url={url}/>

        <Box style={{ margin: 40 }}/>
        <Upcoming/>

        {posts.map(({ node }) => (
          <BlogTile blog={node} key={node.fields.slug}/>
        ))}

        <PaginationBar next={pageContext.next} prev={pageContext.prev}/>
      </Layout>
    )
  }
}

export default BlogHome
