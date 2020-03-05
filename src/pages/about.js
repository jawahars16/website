import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Box, Typography } from "@material-ui/core"
import NavigationBar from "../components/navigation-bar"
import Divider from "@material-ui/core/Divider"
import Image from "gatsby-image"
import Connect from "../components/connect"
import Upcoming from "../components/upcoming"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About'
             featureImage={data.avatar.childImageSharp.fixed.src}/>
        <Box style={{ margin: 24 }}/>
        <NavigationBar url='/about'/>

        <Box style={{ margin: 40 }}/>

        <Box className='profile-picture' boxShadow={5}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt='Jawahar'
          />
        </Box>
        <Connect/>
        <Box style={{ margin: 20 }}/>
        <Upcoming />
        <div className='about'>
          <Typography variant='body1' gutterBottom>
            Jawahar is a Software Programmer who is passionate about learning new languages and frameworks. He has years
            of experience in building enterprise grade applications using various technologies. He started his career in
            2009
            as a desktop application developer. He use Windows Forms and Windows Presentation Foundation (WPF) to build
            thick
            client applications for Windows, which is later evolved into Universal Windows Platform (UWP).
          </Typography>
          <Box margin={3}/>
          <Typography>
            In mid 2015, he shifted towards mobile app development. He was expertise in developing native Windows and
            Android apps. He was a Xamarin certified mobile developer. And currently he is working in Web Development.
            He has expertise in building web applications using traditional LAMP stack and modern Javascript frameworks
            like Angular and React. He also has proficient knowledge and hands on experience in managing complex
            infrastructure for web applications.
          </Typography>
          <Box margin={3}/>
          <Typography>
            He is specifically interested in practicing functional programming with modern language features. He usually
            shares his
            learning through blog and talks.
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
                fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                    src
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
