import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation"
import { Box } from "@material-ui/core"
import styles from "./pagination-bar.module.scss"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const PaginationBar = props => {
  const { prev, next } = props
  console.log('******')
  console.log(next);

  const prevLink = prev ? <div className={styles.toolbar}><NavigateBeforeIcon /><Link to={`../../${prev}`}>Latest articles</Link></div> : <div></div>
  const nextLink = next ? <div className={styles.toolbar}><Link to={`../../${next}`}>Old articles</Link><NavigateNextIcon /></div> : <div></div>

  return <div className={styles.paginationBar}>
    {prevLink}
    {nextLink}
  </div>
}

export default PaginationBar