import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const styles = {
  backgroundColor: "#007ACB",
  paddingTop: 47,
  paddingBottom: 47,
  color: "#fff",
}

function Jumpotron(props) {

  return (
    <Box style={styles} textAlign="center">
      <Typography variant="h1">
        jawahar.tech
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        Full Stack Developer • Polyglot Programmer • Tech Enthusiast
      </Typography>
    </Box>
  )
}

export default Jumpotron