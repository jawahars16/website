import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share"
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share"
import { Toolbar } from "@material-ui/core"
import styles from "./social-share.module.scss"

const SocialShare = props => {
  return (
    <Toolbar className={styles.socialShare}>
      <FacebookShareButton quote={props.title} url={props.url}  className={styles.SocialMediaShareButton}><FacebookIcon
        size={32}/></FacebookShareButton>
      <TwitterShareButton title={props.title} url={props.url}  className={styles.SocialMediaShareButton}><TwitterIcon
        size={32}/></TwitterShareButton>
      <LinkedinShareButton url={props.url} className={styles.SocialMediaShareButton}><LinkedinIcon
        size={32}/></LinkedinShareButton>
      <WhatsappShareButton title={props.title} url={props.url}
                           className={styles.SocialMediaShareButton}><WhatsappIcon
        size={32}/></WhatsappShareButton>
      <RedditShareButton title={props.title} url={props.url}
                         className={styles.SocialMediaShareButton}><RedditIcon size={32}/></RedditShareButton>
    </Toolbar>
  )
}

export default SocialShare