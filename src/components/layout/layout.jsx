import React from "react"
import styles from "./layout.module.scss"
import Jumpotron from "../jumpotron"
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
