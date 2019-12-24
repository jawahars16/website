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

  const prevLink = prev ? <Button><NavigateBeforeIcon /><Link to={prev}>Latest articles</Link></Button> : <Box/>
  const nextLink = next ? <Button><Link to={next}>Old articles</Link><NavigateNextIcon /></Button> : <Box/>

  return <BottomNavigation className={styles.paginationBar}>
    {prevLink}
    {nextLink}
  </BottomNavigation>
}

export default PaginationBar