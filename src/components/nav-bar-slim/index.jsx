import React from "react"
import styles from "./nav-bar-slim.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Box } from "@material-ui/core"


const NavBarSlim = () => {

  const data = useStaticQuery(graphql`
                query NavLogoQuery {
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
          {/* <Link to='/'>Home</Link> */}
          <Link to='/blog'>Blog</Link>
          <Link to='https://www.youtube.com/channel/UCmMu15DUGT3klr0M6RBQqbg/videos' target="_blank" rel="noopener">Videos</Link>
          <Link to='/talks'>Talks</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </Box>
  )
}

export default NavBarSlim
