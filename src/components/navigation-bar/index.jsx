import React from "react"
import { Link } from "gatsby"
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation"
import styles from "./navigation-bar.module.scss"
import { Box } from "@material-ui/core"

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

  const isBlogPage = props.url.includes("blog") || props.url === "/"
  const isTalkPage = props.url.includes("talks")
  const isAboutPage = props.url.includes("about")

  return <Box flexDirection='row' display='flex' justifyContent="space-between">
    <Box flexDirection='row' display='flex' justifyContent="left" marginBottom={-2} className={styles.menuContainer}>
      <Link to='/' className={isBlogPage ? styles.activeLink : styles.link}>
        Blog
      </Link>
      <Link to='/talks' className={isTalkPage ? styles.activeLink : styles.link}>
        Talks
      </Link>
      <Link to='/about' className={isAboutPage ? styles.activeLink : styles.link}>
        About
      </Link>
    </Box>

    <div id='feedly'>
      <a href='https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.jawahar.tech%2Frss.xml' target='blank'><img
        id='feedlyFollow' src='http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png'
        alt='follow us in feedly' width='71' height='28'/></a>
    </div>
  </Box>
}

export default NavigationBar