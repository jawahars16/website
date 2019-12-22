import React from "react"
import { graphql, Img } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Box, Typography } from "@material-ui/core"
import NavigationBar from "../components/navigation-bar"
import Divider from "@material-ui/core/Divider"
import BlogTile from "../components/blog-tile"
import PaginationBar from "../components/pagination-bar"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About'
             featureImage='https://storage.googleapis.com/jawahar-tech/Profile.jpg'/>
        <Box style={{ margin: 24 }}/>
        <NavigationBar/>

        <Divider variant="middle" style={{ margin: 0 }}/>

        <Box style={{ margin: 40 }}/>

        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt='Jawahar'
        />
        <Box style={{ margin: 40 }}/>
        <div className='about'>
          <Typography variant='body1'>
            Jawahar is a Software Programmer who is passionate about learning new languages and frameworks. He has years
            of experience in building enterprise grade applications using various technologies. He is specifically
            interested in practicing functional programming with modern language features. He usually shares his
            learning
            through blog and talks.
          </Typography>
        </div>

      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
    query {
        avatar: file(absolutePath: { regex: "/Profile.jpg/" }) {
            childImageSharp {
                fixed(width: 160, height: 190) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
