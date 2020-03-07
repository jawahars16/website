import React from "react"
import styles from "./layout.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Footer from "../Footer"
import Image from "gatsby-image"
import { Box } from "@material-ui/core"


const PostLayout = props => {
  const { children } = props
  const data = useStaticQuery(graphql`
      query LogoQuery {
          logo: file(absolutePath: { regex: "/logo-inverted.png/" }) {
              childImageSharp {
                  fixed(width: 24, height: 24) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  return (
    <div >
      <Box className={styles.navBar} boxShadow={2}>
        <div className={styles.toolbar}>
          <div>
            <a href='/'>
              <Image
                className={styles.logo}
                fixed={data.logo.childImageSharp.fixed}
                alt='Jawahar'
              />
            </a>
          </div>
          <div className={styles.menu}>
            <Link to='/'>Blog</Link>
            <Link to='/talks'>Talks</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </Box>
      <div className={styles.postLayout}>
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

export default PostLayout
