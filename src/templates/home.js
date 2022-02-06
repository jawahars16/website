import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeTile from "../components/home-tile"
import { Box, Grid, Link, Typography, useMediaQuery } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import PaginationBar from "../components/pagination-bar"
import NavigationBar from "../components/navigation-bar"
import Upcoming from "../components/upcoming"
import HomeTitle from "../components/home-title"

const embed = (notMobile, url) => {
  if (notMobile) {
    return (
      <Grid item >
        <iframe
          src={url}
          width={230}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </Grid>)
  } else {
    return (
      <Grid item style={{ width: "100%" }}>
        <iframe
          src={url}
          height={240}
          style={{ width: "100%" }}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </Grid>)
  }
};

export default function Home(props) {
  const notMobile = useMediaQuery('(min-width:600px)');
  const { pageContext } = props
  const articles = pageContext.articles
  const talks = pageContext.talks
  const videos = pageContext.videos
  const url = pageContext.siteMeta.siteUrl

  return (
    <Layout location={props.location}>
      <SEO title='Blog'
        featureImage='https://jawahar.tech/static/9ffa033d65c932ec90c8c49eeee9c15e/6bf53/Profile.jpg' />
      <Box style={{ margin: 24 }} />

      <div style={{ textAlign: "center", margin: "20px 0", fontSize: "16.5px" }}>
        <Typography variant="p" style={{opacity: 0.7}}>
          Jawahar is a Software Programmer and Cloud Practitioner who works with several enterprise organisations in
          converting business requirements to technical design. He also delivered several mission critical applications
          and responsible for high availability and reliability of the system.
        </Typography>
        <Box style={{ margin: 12 }} />
        <Typography>
          <Link style={{ textDecoration: "none", fontSize: "16px" }} href="/about">
            Read More
          </Link>
        </Typography>
      </div>

      <Box sx={{ height: 20 }} />

      <HomeTitle text="✏️ Blog" url="/blog" />

      <Grid container spacing={2}>
        {articles.map(({ node }) => (
          <HomeTile blog={node} key={node.fields.slug} />
        ))}
      </Grid>

      <Box sx={{ height: 60 }} />

      <HomeTitle text="📹 Videos" url="https://www.youtube.com/channel/UCmMu15DUGT3klr0M6RBQqbg/videos" />

      <Grid container spacing={1} justifyContent="space-between">
        {videos.map(({ url }) => embed(notMobile, url))}
      </Grid>

      <Box sx={{ height: 20 }} />

      <HomeTitle text="🎤 Talks" url="/talks" />

      <Grid container spacing={2}>
        {talks.map(({ node }) => (
          <HomeTile blog={node} key={node.fields.slug} />
        ))}
      </Grid>
    </Layout>
  )
}
