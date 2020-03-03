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
  boxShadow: 'none',
  fontWeight: 500
}

const NavigationBar = props => {

  const isBlogPage = props.url.includes("blog") || props.url === "/"
  const isTalkPage = props.url.includes("talks")
  const isAboutPage = props.url.includes("about")

  return <Box flexDirection='row' display='flex' justifyContent="center" marginBottom={-2}>
    <Link to='/' style={isBlogPage ? activeLinkStyle : linkStyle}>
      Blog
    </Link>
    <Link to='/talks' style={isTalkPage ? activeLinkStyle : linkStyle}>
      Talks
    </Link>
    <Link to='/about' style={isAboutPage ? activeLinkStyle : linkStyle}>
      About
    </Link>
  </Box>
}

export default NavigationBar