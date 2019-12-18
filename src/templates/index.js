import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import Button from "@material-ui/core/Button"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import BottomNavigation from "@material-ui/core/BottomNavigation"

class BlogIndex extends React.Component {
  render() {
    console.log(this.props)
    const { pageContext } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = pageContext.posts

    return (
      <Layout location={this.props.location} title='{siteTitle}'>
        <SEO title="All posts"/>

        {posts.map(({ node }) => (
          <BlogTile blog={node} key={node.fields.slug}/>
        ))}

        <BottomNavigation style={{justifyContent: "space-between"}}>
          <Button><Link to={pageContext.prev}>Latest articles</Link></Button>
          <Button><Link to={pageContext.next}>Older articles</Link></Button>
        </BottomNavigation>
      </Layout>
    )
  }
}

export default BlogIndex
