import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import classes from "./home-tile.module.scss"
import Img from "gatsby-image"
import { CardActionArea, CardMedia, Grid } from "@material-ui/core"

export default function HomeTile(props) {
    const { frontmatter, excerpt } = props.blog
    const { title, date, featuredImage, tileImage } = frontmatter
    let featuredImageSrc = tileImage || featuredImage

    let featuredImg

    if (!featuredImage || featuredImage === "https://s0.wp.com/i/blank.jpg") {
        featuredImg = <Box />
    }
    else if (featuredImageSrc.childImageSharp) {
        featuredImg =
            <img
                className={classes.cover}
                src={featuredImageSrc.childImageSharp.fluid.src}
                alt={title}
                loading='lazy'
            />
    }
    else {
        featuredImg =
            <img
                className={classes.cover}
                src={featuredImageSrc}
                alt={title}
                loading='lazy'
            />
    }

    let readTime
    if (props.blog.readingTime) {
        readTime = props.blog.readingTime.text
    } else if (props.blog.fields.readingTime) {
        readTime = props.blog.fields.readingTime.text
    } else {
        readTime = frontmatter.viewTime
    }

    return (
        <Grid xs={12} sm={4} item md={4}>
            <Link href={props.blog.fields.slug}>
                <Card sx={{ maxWidth: 345 }} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={featuredImageSrc.childImageSharp.fluid.src}
                            alt={title}
                            style={{display: "block"}}
                        />
                        <CardContent >
                            <Typography variant="subtitle2" className='date-read-time'>
                                {date}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h5" >
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    )
}