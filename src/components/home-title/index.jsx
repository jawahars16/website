import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import classes from "./home-title.module.scss"
import Img from "gatsby-image"
import { CardActionArea, CardMedia, Grid } from "@material-ui/core"

export default function HomeTitle({ text, url }) {

    return (
        <Grid className={classes.hometitle}>
            <Grid xs direction="row" container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h2">
                        {text}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link href={url} underline="none">
                        Show More >>
                    </Link>
                </Grid>
            </Grid>
            <Box style={{ marginTop: 10, marginBottom: 24 }} sx={{
                height: 2
            }} className={classes.line} />
        </Grid>
    )
}