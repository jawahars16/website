import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { CardHeader } from "@material-ui/core"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    marginBottom: 20,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "25%",
    objectFit: "cover",
    margin: 0,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export default function BlogTile(props) {
  const classes = useStyles()
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
              <Typography variant="h5" >
                {title}
              </Typography>
              <Typography variant="subtitle2" >
                {date}
              </Typography>
              <Box margin={1}/>
              <Typography variant="body1" >
                {`${excerpt.substring(0, 100)}...`}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </article>
  )
}