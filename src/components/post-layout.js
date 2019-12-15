import React from "react"

import { rhythm } from "../utils/typography"
import './layout.css';

const styles = {
  navBar: {
    height: 47,
    backgroundColor: "#007ACB",
    position: 'fixed',
    overflow: 'hidden',
    width: '100%',
    marginBottom: 200
  },
  layout: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
  }
}

class PostLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <div style={styles.navBar}>
        </div>
        <div style={styles.layout}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default PostLayout
