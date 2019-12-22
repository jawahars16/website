import React from "react"
import { rhythm } from "../../utils/typography"
import styles from "./layout.module.scss"
import Jumpotron from "../jumpotron"
import { Typography } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import Helmet from "react-helmet"
import Footer from "../Footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Jumpotron/>
        <div className={styles.layout}>
          <main>{children}</main>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Layout
