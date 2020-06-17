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
import { Box, Toolbar } from "@material-ui/core"
import styles from "./social-share.module.scss"

const SocialShare = props => {
  return (
    <Box flexDirection='row' display='flex' justifyContent="space-between">
      <Toolbar className={styles.socialShare}>
        <FacebookShareButton quote={props.title} url={props.url} className={styles.SocialMediaShareButton}><FacebookIcon
          size={32}/></FacebookShareButton>
        <TwitterShareButton title={props.title} url={props.url} className={styles.SocialMediaShareButton}><TwitterIcon
          size={32}/></TwitterShareButton>
        <LinkedinShareButton url={props.url} className={styles.SocialMediaShareButton}><LinkedinIcon
          size={32}/></LinkedinShareButton>
        <WhatsappShareButton title={props.title} url={props.url}
                             className={styles.SocialMediaShareButton}><WhatsappIcon
          size={32}/></WhatsappShareButton>
        <RedditShareButton title={props.title} url={props.url}
                           className={styles.SocialMediaShareButton}><RedditIcon size={32}/></RedditShareButton>
      </Toolbar>
      <div id='feedly' className={styles.feedlyButton}>
        <a href='https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.jawahar.tech%2Frss.xml' target='blank'><img
          id='feedlyFollow' src='https://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png'
          alt='follow us in feedly' width='71' height='28'/></a>
      </div>
    </Box>
  )
}

export default SocialShare