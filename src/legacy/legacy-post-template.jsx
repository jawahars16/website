import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import "./hljs.css"
import PostLayout from "../components/layout/post-layout"
import Divider from "@material-ui/core/Divider"
import { Typography } from "@material-ui/core"
import SocialShare from "../components/social-share"
import CommentsSection from "../components/comment-section"

class LegacyBlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.legacyContent
    const {title, siteUrl} = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext
    const featuredImageSrc = post.frontmatter.featuredImage !== "https://storage.googleapis.com/jawahar-tech/Profile.jpg" && post.frontmatter.featuredImage

    return (
      <PostLayout location={this.props.location} title={title}>
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
          <SocialShare title={post.frontmatter.title} url={`${siteUrl}${this.props.pageContext.slug}`}/>
          {featuredImageSrc && <img src={featuredImageSrc} alt={post.frontmatter.title}/>}
          <section dangerouslySetInnerHTML={{ __html: post.html }}/>
          <Divider variant="middle" style={{ margin: 0 }}/>
          <SocialShare title={post.frontmatter.title} url={`${siteUrl}${this.props.pageContext.slug}`}/>

          <CommentsSection title={post.frontmatter.title}
                           id={this.props.pageContext.slug}
                           url={`${siteUrl}${this.props.pageContext.slug}`}/>
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
                siteUrl
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
