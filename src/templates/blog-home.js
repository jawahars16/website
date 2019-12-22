import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import Button from "@material-ui/core/Button"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import { Box } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import PaginationBar from "../components/pagination-bar"
import NavigationBar from "../components/navigation-bar"

class BlogHome extends React.Component {
  render() {
    const { pageContext } = this.props
    const posts = pageContext.posts

    return (
      <Layout location={this.props.location} title='{siteTitle}'>
        <SEO title='Blog' featureImage='https://storage.googleapis.com/jawahar-tech/Profile.jpg'/>
        <Box style={{ margin: 24 }}/>
        <NavigationBar/>

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
