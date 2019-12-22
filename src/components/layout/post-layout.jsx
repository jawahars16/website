import React from "react"

import { rhythm } from "../../utils/typography"
import styles from "./layout.module.scss"
import { Typography } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { graphql, Link, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import LazyLoad from "react-lazy-load"
import Divider from "@material-ui/core/Divider"
import Footer from "../Footer"
import $ from "jquery"
import Image from "gatsby-image"


const PostLayout = props => {
  const { children } = props
  let disqusConfig = {
    url: window.location.href,
    identifier: window.location.pathname,
    title: document.title,
  }

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
    <div>
      <div className={styles.navBar}>
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
      </div>
      <div className={styles.postLayout}>
        <main>{children}</main>
        <Disqus className='disqus' config={disqusConfig}/>
        <Footer/>
      </div>
    </div>
  )
}

export default PostLayout
