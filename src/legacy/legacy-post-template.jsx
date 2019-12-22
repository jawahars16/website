import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "./hljs.css"
import PostLayout from "../components/layout/post-layout"
import Divider from "@material-ui/core/Divider"
import { Typography } from "@material-ui/core"
import LazyLoad from "react-lazy-load"
import Helmet from "react-helmet"
import SocialShare from "../components/social-share"

class LegacyBlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.legacyContent
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const featuredImageSrc = post.frontmatter.featuredImage !== "https://storage.googleapis.com/jawahar-tech/Profile.jpg" && post.frontmatter.featuredImage

    return (
      <PostLayout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          featureImage={featuredImageSrc}
        />
        <article>
          <header>
            <Typography variant='h1' style={{ fontSize: 60 }}>
              {post.frontmatter.title}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              {post.frontmatter.date}
            </Typography>
          </header>
          <SocialShare title={post.frontmatter.title}/>
          {featuredImageSrc && <img src={featuredImageSrc}/>}
          <section dangerouslySetInnerHTML={{ __html: post.html }}/>
          <Divider variant="middle" style={{ margin: 0 }}/>
          <SocialShare title={post.frontmatter.title}/>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </PostLayout>
    )
  }
}

export default LegacyBlogPostTemplate

export const pageQuery = graphql`
    query LegacyBlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        legacyContent(fields:{slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage
            }
        }
    }
`
