import React from "react"
import Divider from "@material-ui/core/Divider"
import { Typography } from "@material-ui/core"
import styles from "./footer.module.scss"
import SocialIcons from "../social-icons"

const Footer = (props) => {
  return (
    <div>
      <footer>
        <Divider variant="middle"/>
        <div className={styles.footerBar}>
          <SocialIcons />
          <Typography variant='caption'>Copyright © jawahar.tech</Typography>
        </div>
      </footer>
    </div>
  )
}

export default Footer