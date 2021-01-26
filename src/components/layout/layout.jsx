import React from "react"
import styles from "./layout.module.scss"
import Jumpotron from "../jumpotron"
import Footer from "../Footer"
import SimpleReactLightbox from 'simple-react-lightbox'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <SimpleReactLightbox>
        <div>
          <Jumpotron />
          <div className={styles.layout}>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </SimpleReactLightbox>
    )
  }
}

export default Layout
