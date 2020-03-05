import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Card from "@material-ui/core/Card"
import classes from "./upcoming.module.scss"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Image from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import moment from "moment"

const Upcoming = props => {

  const data = useStaticQuery(graphql`
      query UpcomingQuery {
          contentYaml {
              talks {
                  id
                  title
                  description
                  color
                  textColor
                  location
                  active
                  date
                  link
                  image
              }
          }
      }
  `)
  const talks = data.contentYaml.talks

  if (!talks || talks.length <= 0) return null

  const isActive = talk => {
    return talk.active && moment() < moment(talk.date)
  }

  return (
    talks.filter(isActive).map(({ title, description, image, link, date, id, color, textColor, location }) => {
        return (
          <Box key={id} boxShadow={2}>
            <a href={link} target='_blank' rel='noopener'>
              <Card className={classes.card} style={{ backgroundColor: color, color: textColor }}>
                <div>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={3} sm={1}>
                        <img
                          src={image}
                          alt='Jawahar'
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="subtitle2" className={classes.dateReadTime}>
                          {moment(date, "YYYY-MM-DD HH:mm:ss").format("MMM Do, YYYY hh:mm A")} • {moment(date, "YYYY-MM-DD HH:mm:ss").fromNow()} • {location}
                        </Typography>
                        <Typography variant="h5">
                          Upcoming Talk - {title}
                        </Typography>
                      </Grid>
                      <Box margin={1}/>
                      <Typography variant="body1">
                        {description}
                      </Typography>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </a>
          </Box>
        )
      },
    ))
}

export default Upcoming