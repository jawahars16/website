import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import styles from "./jumpotron.module.scss"
import Link from "@material-ui/core/Link"
import logo from "../../images/logo.svg"

const Jumpotron = (props) => {
  return (
    <Box className={styles.jumbotron} textAlign='center'>
      <a href='/'>
        <img src={logo}/>
      </a>
      <Typography gutterBottom variant="subtitle1" className={styles.subtitle}>
        Full Stack Developer • Polyglot Programmer • Tech Enthusiast
      </Typography>
    </Box>
  )
}

export default Jumpotron