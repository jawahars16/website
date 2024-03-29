import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import HBlogTile from "../components/h-blog-tile"
import PostLayout from "../components/layout/post-layout"
import { Icon, Typography } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import SocialShare from "../components/social-share"
import CommentsSection from "../components/comment-section"
import { NavigateBefore } from "@material-ui/icons"
import Box from "@material-ui/core/Box"

class BlogPage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const otherArticles = this.props.data.allMarkdownRemark.edges

    if (post === null) {
      return <div>Shit !!! I hate this...</div>
    }

    const { title, siteUrl } = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext
    const featuredImageSrc = post.frontmatter.featuredImage.childImageSharp.fluid.src
    const featuredImage = <img src={featuredImageSrc} alt={post.frontmatter.title}
                               className='featured-image webfeedsFeaturedVisual'/>

    return (
      <PostLayout location={this.props.location} title={title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          featureImage={featuredImageSrc.includes("http") ? featuredImageSrc : `https://www.jawahar.tech${featuredImageSrc}`}
        />
        <Box boxShadow={5} className='content'>
          <article>
            <header>
              <Link to='/' className='back-to-home-link'>
                <Box display='flex' flexDirection='row' alignItems='center'>
                  <NavigateBefore/>
                  <span>
                Back to Home
                </span>
                </Box>
              </Link>
              <Typography variant='h1' style={{ fontSize: 60 }}>
                {post.frontmatter.title}
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                {post.frontmatter.date} • {post.fields.readingTime.text}
              </Typography>
            </header>
            <SocialShare title={post.frontmatter.title} url={`${siteUrl}${this.props.pageContext.slug}`}/>
            {featuredImage}
            <section dangerouslySetInnerHTML={{ __html: post.html }}/>
            <Divider variant="middle" style={{ margin: 0 }}/>
            <SocialShare title={post.frontmatter.title} url={`${siteUrl}${this.props.pageContext.slug}`}/>
            {/* <Box display="flex" flexDirection="row" m={-1}>
              {otherArticles.map(({ node }) => (
                <HBlogTile blog={node} key={node.fields.slug}/>
              ))}
            </Box> */}
            <CommentsSection title={post.frontmatter.title}
                             id={this.props.pageContext.slug}
                             url={`${siteUrl}${this.props.pageContext.slug}`}/>
          </article>
        </Box>
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

export default BlogPage

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
        ) {
          edges {
            node {
              fields {
                slug
                readingTime {
                  text
                }
              }
              excerpt
              fileAbsolutePath
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                tileImage {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            fields {
                readingTime {
                    text
                }
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
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
