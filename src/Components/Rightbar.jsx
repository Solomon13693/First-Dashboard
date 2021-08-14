import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Container, Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    position: 'fixed',
    top: '60px',
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2)
  },
  title2: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
}))

function Rightbar() {
  const classes = useStyle()
  return (
    <>
      <Container className={classes.container}>
      <Typography className={classes.title} variant="h5">Friends Online</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
      </AvatarGroup>

      <Typography className={classes.title2} variant="h5">Gallery</Typography>
      <div className={classes.root}>
      <ImageList rowHeight={180} cols={2} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="" />
            <ImageListItemBar
              title="Hello world"
              subtitle={<span>by: AdeoyeSolomon</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
      </ImageList>
    </div>

      </Container>
    </>
  )
}

export default Rightbar
