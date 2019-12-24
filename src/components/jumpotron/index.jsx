import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import styles from "./jumpotron.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classes from "../blog-tile/blog-tile.module.scss"

const Jumpotron = (props) => {

  const data = useStaticQuery(graphql`
      query TitleQuery {
          avatar: file(absolutePath: { regex: "/title-logo.png/" }) {
              childImageSharp {
                  fluid  {
                      src
                  }
              }
          }
      }
  `)

  return (
    <Box className={styles.jumbotron} textAlign='center'>
      <div className={styles.imageContainer}>
        <a href='/'>
          {/*<Img fluid={data.avatar.childImageSharp.fluid} alt='Jawahar'/>*/}
          <img src={data.avatar.childImageSharp.fluid.src} alt='Jawahar'/>
        </a>
      </div>
      <Typography gutterBottom variant="subtitle1" className={styles.subtitle}>
        Full Stack Developer • Polyglot Programmer • Tech Enthusiast
      </Typography>
    </Box>
  )
}

export default Jumpotron