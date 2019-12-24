import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import classes from "./blog-tile.module.scss"
import Img from "gatsby-image"

export default function BlogTile(props) {
  const { frontmatter, excerpt } = props.blog
  const { title, date, featuredImage, tileImage } = frontmatter
  let featuredImageSrc = tileImage || featuredImage

  let featuredImg

  if (!featuredImage || featuredImage === "https://s0.wp.com/i/blank.jpg") {
    featuredImg = <Box/>
  } else if (featuredImageSrc.childImageSharp) {
    featuredImg =
      <img
        className={classes.cover}
        src={featuredImage.childImageSharp.fluid.src}
        alt={title}
        loading='lazy'
      />
  } else {
    featuredImg =
      <img
        className={classes.cover}
        src={featuredImageSrc}
        alt={title}
        loading='lazy'
      />
  }

  return (
    <article>
      <Link to={props.blog.fields.slug}>
        <Card className={classes.card}>
          {featuredImg}
          <div>
            <CardContent>
              <Typography variant="subtitle2">
                {date}
              </Typography>
              <Typography variant="h5">
                {title}
              </Typography>
              <Box margin={1}/>
              <Typography variant="body1">
                {`${excerpt.substring(0, 100)}...`}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </article>
  )
}