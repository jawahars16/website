import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { CardHeader } from "@material-ui/core"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import classes from "./blog-tile.module.scss"

export default function BlogTile(props) {
  const { frontmatter, excerpt } = props.blog
  const { title, date, featuredImage } = frontmatter
  let featuredImageSrc = featuredImage || "https://www.jawahar.tech/images/placeholder.png"

  if (featuredImageSrc.childImageSharp) {
    featuredImageSrc = featuredImageSrc.childImageSharp.fluid.src
  }

  return (
    <article>
      <Link to={props.blog.fields.slug}>
        <Card className={classes.card}>
          <img
            className={classes.cover}
            src={featuredImageSrc}
            alt={title}
          />
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