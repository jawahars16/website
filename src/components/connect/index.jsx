import React from "react"
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share"
import { Toolbar } from "@material-ui/core"
import styles from "./connect.module.scss"
import InstapaperIcon from "react-share/lib/InstapaperIcon"
import EmailIcon from "react-share/lib/EmailIcon"
import InstaIcon from '../../icons/instagram.svg'
import GitIcon from '../../icons/github.svg'

const Connect = props => {
  return (
    <Toolbar className={styles.connect}>
      <a href='https://www.facebook.com/jawahar16' target='_blank' rel='noopener'  className={styles.connectButton}><FacebookIcon
        size={32}/></a>
      <a href='https://twitter.com/jawahars_16' target='_blank' rel='noopener'  className={styles.connectButton}><TwitterIcon
        size={32}/></a>
      <a href='https://in.linkedin.com/in/jawahars16' target='_blank' rel='noopener' className={styles.connectButton}><LinkedinIcon
        size={32}/></a>
      <a href='https://www.instagram.com/jawahar16/' target='_blank' rel='noopener'
                           className={styles.connectButton}>
        <img src={InstaIcon} alt='jawahar16' className={styles.icon}/> </a>
      <a href='https://github.com/jawahars16' target='_blank' rel='noopener'
         className={styles.connectButton}>
        <img src={GitIcon} alt='@jawahars16' className={styles.icon}/> </a>
      <a title={props.title} href='mailto:jawahars_16@live.in' target='_blank' rel='noopener'
                         className={styles.connectButton}><EmailIcon size={32}/></a>
    </Toolbar>
  )
}

export default Connect