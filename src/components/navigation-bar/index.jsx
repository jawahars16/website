import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation"
import styles from "./navigation-bar.module.scss"
import { Box, useMediaQuery } from "@material-ui/core"

const linkStyle = {
  boxShadow: "none",
  marginRight: 24,
  fontSize: 18,
  color: "#4A5258",
}

const activeLinkStyle = {
  marginRight: 24,
  fontSize: 18,
  color: "#007ACB",
  boxShadow: "none",
  fontWeight: 500,
}

const NavigationBar = props => {
  const isBlogPage = props.url.includes("blog")
  const isTalkPage = props.url.includes("talks")
  const isAboutPage = props.url.includes("about")
  const noMobile = useMediaQuery('(min-width:600px)');

  return <Box flexDirection='row' display='flex' justifyContent="space-between">
    <Box flexDirection='row' display='flex' justifyContent="left" marginBottom={-2} className={styles.menuContainer}>
      {noMobile ?
        <div>
          <Link to='/' className={styles.homeLink}>
            <svg className={styles.homeIcon} fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" /></svg>
            Home
          </Link>
          <Link to='/blog' className={isBlogPage ? styles.activeLink : styles.link}>
            Blog
          </Link>
          <Link to='https://www.youtube.com/channel/UCmMu15DUGT3klr0M6RBQqbg/videos' target="_blank" rel="noopener" className={styles.link}>
            Videos
          </Link>
          <Link to='/talks' className={isTalkPage ? styles.activeLink : styles.link}>
            Talks
          </Link>
          <Link to='/about' className={isAboutPage ? styles.activeLink : styles.link}>
            About
          </Link>
        </div>
        :
        <div>
          <Link to='/' className={styles.mobileHomeLink} style={{ paddingTop: "2px" }}>
            <svg className={styles.homeIcon} fill="#007ACB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" /></svg>
          </Link>
          <Link to='/blog' className={isBlogPage ? styles.activeMobileLink : styles.mobileLink}>
            Blog
          </Link>
          <Link to='https://www.youtube.com/channel/UCmMu15DUGT3klr0M6RBQqbg/videos' target="_blank" rel="noopener" className={styles.mobileLink}>
            Videos
          </Link>
          <Link to='/talks' className={isTalkPage ? styles.activeMobileLink : styles.mobileLink}>
            Talks
          </Link>
          <Link to='/about' className={isAboutPage ? styles.activeMobileLink : styles.mobileLink}>
            About
          </Link>
        </div>
      }
    </Box>
    {noMobile &&
      <div id='feedly'>
        <a href='https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.jawahar.tech%2Frss.xml' target='blank'><img
          id='feedlyFollow' src='https://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png'
          alt='follow us in feedly' width='71' height='28' /></a>
      </div>
    }
  </Box>
}

export default NavigationBar