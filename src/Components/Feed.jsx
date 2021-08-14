import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import Post from './Post'

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

function Feed() {
  const classes = useStyle()
  return (
    <Container className={classes.container} >
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Container>
  )
}

export default Feed
