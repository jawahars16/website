import React from "react"
import { Disqus } from "gatsby-plugin-disqus"

const CommentsSection = props => {

  let disqusConfig = {
    url: props.url,
    identifier: props.id,
    title: props.title,
  }

  return (
    <Disqus className='disqus' config={disqusConfig}/>
  )
}

export default CommentsSection