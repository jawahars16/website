import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PostLayout from "../components/layout/post-layout"
import { Box, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import SocialShare from "../components/social-share"
import Divider from "@material-ui/core/Divider"
import Video from "../components/video"
import CommentsSection from "../components/comment-section"

class TalkPage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const {title, siteUrl} = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext

    return (
      <PostLayout location={this.props.location} title={title}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          featureImage={post.frontmatter.featuredImage.childImageSharp.fluid.src}
        />
        <article>
          <header>
            <Typography variant='h1' style={{ fontSize: 60 }} >
              {post.frontmatter.title}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              {post.frontmatter.date}
            </Typography>
          </header>
          <SocialShare title={post.frontmatter.title} url={`${siteUrl}${this.props.pageContext.slug}`}/>
          <Video videoLink={post.frontmatter.videoLink}/>
          <section dangerouslySetInnerHTML={{ __html: post.html }}/>
          <Button variant='contained' color='secondary' href={post.frontmatter.slidesLink} target='_blank'>View Slides</Button>
          <Box style={{margin: 32}}/>
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

export default TalkPage

export const pageQuery = graphql`
    query TalkPageBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                videoLink
                slidesLink
                date(formatString: "MMMM DD, YYYY")
                featuredImage {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`
