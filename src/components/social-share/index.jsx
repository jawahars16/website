import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from "react-share"
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from "react-share"
import { Toolbar } from "@material-ui/core"
import styles from "./social-share.module.scss"

const SocialShare = props => {
  return (
    <Toolbar className={styles.socialShare}>
      <FacebookShareButton quote={props.title} url={window.location.href}  className={styles.SocialMediaShareButton}><FacebookIcon
        size={32}/></FacebookShareButton>
      <TwitterShareButton title={props.title} url={window.location.href}  className={styles.SocialMediaShareButton}><TwitterIcon
        size={32}/></TwitterShareButton>
      <LinkedinShareButton url={window.location.href} className={styles.SocialMediaShareButton}><LinkedinIcon
        size={32}/></LinkedinShareButton>
      <WhatsappShareButton title={props.title} url={window.location.href}
                           className={styles.SocialMediaShareButton}><WhatsappIcon
        size={32}/></WhatsappShareButton>
      <RedditShareButton title={props.title} url={window.location.href}
                         className={styles.SocialMediaShareButton}><RedditIcon size={32}/></RedditShareButton>
    </Toolbar>
  )
}

export default SocialShare