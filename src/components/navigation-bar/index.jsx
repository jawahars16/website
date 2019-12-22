import React from "react"
import { Link } from "gatsby"
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation"
import styles from "./navigation-bar.module.scss"

const linkStyle = {
  boxShadow: "none",
  marginRight: 24,
  fontSize: 18,
  color: "#4A5258",
}

const activeLinkStyle = {
  marginRight: 24,
  fontSize: 18,
  boxShadow: "0 2px 0 0 #007ACB",
  color: "#007ACB",
}

const NavigationBar = props => {

  const isBlogPage = window.location.pathname.includes("/blog") || window.location.pathname === "/"

  return <BottomNavigation className={styles.navigationBar}>
    <Link to='/' style={isBlogPage ? activeLinkStyle : linkStyle}>
      Blog
    </Link>
    <Link to='/talks' style={linkStyle} activeStyle={activeLinkStyle}>
      Talks
    </Link>
    <Link to='/about' style={linkStyle} activeStyle={activeLinkStyle}>
      About
    </Link>
  </BottomNavigation>
}

export default NavigationBar