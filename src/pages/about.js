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
import { SRLWrapper } from "simple-react-lightbox";
import csmcert from '../../content/assets/csm-cert.jpg'
import gcpcert from '../../content/assets/gcp-cert.jpeg'
import azurecert from '../../content/assets/azurecert.png'
import hcvault from '../../content/assets/hc-vault.png'
import xamcert from '../../content/assets/xamarin-cert.jpeg'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About'
          featureImage={`https://jawahar.tech${data.avatar.childImageSharp.fixed.src}`} />
        <Box style={{ margin: 24 }} />
        <NavigationBar url='/about' />

        <Box style={{ margin: 40 }} />

        <Box className='profile-picture' >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt='Jawahar'
          />
        </Box>
        <Box style={{ margin: 20 }} />
        <Upcoming />
        <Box style={{ marginTop: 30 }} />
        <div className="certifications">
          <SRLWrapper>
            <a href={hcvault}>
              <Image
                fixed={data.hcbadge.childImageSharp.fixed}
                alt='Certified Azure Solution Architect'
              />
            </a>
            <a href={azurecert}>
              <Image
                fixed={data.azure.childImageSharp.fixed}
                alt='Certified Azure Solution Architect'
              />
            </a>
            <a href={gcpcert}>
              <Image
                fixed={data.gcp.childImageSharp.fixed}
                alt='Certified Google Cloud Architect'
              />
            </a>
            <a href={xamcert}>
              <Image
                fixed={data.xamarin.childImageSharp.fixed}
                alt='Certified Xamarin Mobile Developer'
              />
            </a>
            <a href={csmcert}>
              <Image
                fixed={data.csm.childImageSharp.fixed}
                alt='Certified Scrum Master'
              />
            </a>
          </SRLWrapper>
        </div>
        <Box style={{ marginTop: 30 }} />
        <div className='about'>
          <Typography variant='body1' gutterBottom>
            Jawahar is a Software Programmer and Cloud Practitioner who works with several enterprise organisations in
            converting business requirements to technical design. He also delivered several mission critical applications
            and responsible for high availability and reliability of the system. He is passionate about several managed
            cloud services and serverless architectures. He is a certified GCP and Azure Cloud Architect.
          </Typography>
          <Box margin={3} />
          <Typography>
            He is also passionate about learning new languages and frameworks. He has years of experience in building
            enterprise grade applications using various technologies. He started his career in 2009 as a desktop
            application developer. He use Windows Forms and Windows Presentation Foundation (WPF) to build thick client
            applications for Windows, which is later evolved into Universal Windows Platform (UWP).
          </Typography>
          <Box margin={3} />
          <Typography>
            In mid 2015, he shifted towards mobile app development. He was expertise in developing native Windows and
            Android apps. He was a Xamarin certified mobile developer. And currently he is working in Web Development.
            He has expertise in building web applications using traditional LAMP stack and modern Javascript frameworks
            like Angular and React. He also has proficient knowledge and hands on experience in managing complex
            infrastructure for web applications.
          </Typography>
          <Box margin={3} />
          <Typography>
            He usually shares his learning through blog and talks.
          </Typography>
        </div>
        <Connect />

      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
    query {
        avatar: file(absolutePath: { regex: "/DP.jpeg/" }) {
            childImageSharp {
                fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                    src
                }
            }
        },
        csm: file(absolutePath: { regex: "/csm.png/" }) {
            childImageSharp {
                fixed(width: 120, height:120) {
                    ...GatsbyImageSharpFixed
                    src
                }
            }
        },
        xamarin: file(absolutePath: { regex: "/xamarin.png/" }) {
            childImageSharp {
                fixed(width: 125, height:125) {
                    ...GatsbyImageSharpFixed
                    src
                }
            }
        },
        gcp: file(absolutePath: { regex: "/gcp.png/" }) {
            childImageSharp {
                fixed(width: 120, height:120) {
                    ...GatsbyImageSharpFixed
                    src
                }
            }
        },
        hcbadge: file(absolutePath: { regex: "/hcbadge.png/" }) {
            childImageSharp {
                fixed(width: 120, height:120) {
                    ...GatsbyImageSharpFixed
                    src
                }
            }
        },
        azure: file(absolutePath: { regex: "/azure.png/" }) {
          childImageSharp {
              fixed(width: 120, height:120) {
                  ...GatsbyImageSharpFixed
                  src
              }
          }
      },
        site {
            siteMetadata {
                title
            }
        }
    }
`
