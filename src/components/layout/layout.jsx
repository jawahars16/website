import React, { useRef, useEffect } from "react"
import styles from "./layout.module.scss"
import Jumpotron from "../jumpotron"
import Footer from "../Footer"
import SimpleReactLightbox from 'simple-react-lightbox'
import NavBarSlim from "../nav-bar-slim"

const Layout = props => {
  const { children } = props
  const slimHeader = useRef(null);
  const mainContent = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (mainContent && mainContent.current && window.scrollY > mainContent.current.offsetTop) {
        slimHeader.current && slimHeader.current.classList.remove(styles.hideSlimHeader);
      } else {
        slimHeader.current && slimHeader.current.classList.add(styles.hideSlimHeader);
      }
    }
  });

  return (
    <SimpleReactLightbox>
      <div>
        <Jumpotron />
        <div ref={slimHeader} className={styles.hideSlimHeader} >
          <NavBarSlim />
        </div>
        <div className={styles.layout}>
          <main ref={mainContent} >{children}</main>
          <Footer />
        </div>
      </div>
    </SimpleReactLightbox>
  )
}

export default Layout
