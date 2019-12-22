import React from "react"

import { rhythm } from "../../utils/typography"
import styles from "./layout.module.scss"
import { Typography } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import LazyLoad from "react-lazy-load"
import Divider from "@material-ui/core/Divider"
import Footer from "../Footer"
import $ from "jquery"

class PostLayout extends React.Component {

  render() {
    const { children } = this.props
    let disqusConfig = {
      url: window.location.href,
      identifier: window.location.pathname,
      title: document.title,
    }
    return (
      <div>
        <div className={styles.navBar}>
          <div className={styles.toolbar}>
            <div>
              <Link to='/'>jawahar.tech</Link>
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
}

export default PostLayout
