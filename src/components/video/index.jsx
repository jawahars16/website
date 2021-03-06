import React from "react"
import styles from './video.module.scss'

const Video = props => {
  return <div className={styles.respContainer}>
    <iframe width="560" height="315" src={props.videoLink} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen className={styles.respIframe} title={props.videoLink}></iframe>
  </div>
}

export default Video