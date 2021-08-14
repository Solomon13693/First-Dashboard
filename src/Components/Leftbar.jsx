import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CollectionsIcon from '@material-ui/icons/Collections';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyle = makeStyles((theme) => ({
  container:{
    height: '120vh',
    color: 'white',
    paddingTop: theme.spacing(5),
    background: theme.palette.primary.dark,
    position: 'sticky',
    top: '60px',
    [theme.breakpoints.up('sm')]: {
      background: 'white',
      color: 'black',
      border: '1px solid #999'
    }
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer'
    }
  },
  text:{
    fontWeight: 500, 
    [theme.breakpoints.down('sm')]: {
      display: 'none',
     },
  },
  icon:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px'
    }
  }
}))

function Leftbar() {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
          <a href="#">
          <div className={classes.item}>
              <HomeIcon className={classes.icon} />
              <Typography className={classes.text}>Home</Typography>
          </div>
          </a>
          <div className={classes.item}>
              <PersonIcon className={classes.icon} />
              <Typography className={classes.text}>People</Typography>
          </div>
          <div className={classes.item}>
              <ListIcon className={classes.icon} />
              <Typography className={classes.text}>Lists</Typography>
          </div>
          <div className={classes.item}>
              <CameraAltIcon className={classes.icon} />
              <Typography className={classes.text}>Camera</Typography>
          </div>
          <div className={classes.item}>
              <PlayCircleFilledIcon className={classes.icon} />
              <Typography className={classes.text}>Video</Typography>
          </div>
          <div className={classes.item}>
              <PhoneIphoneIcon className={classes.icon} />
              <Typography className={classes.text}>Apps</Typography>
          </div>
          <div className={classes.item}>
              <CollectionsIcon className={classes.icon} />
              <Typography className={classes.text}>Collection</Typography>
          </div>
          <div className={classes.item}>
              <ShopTwoIcon className={classes.icon} />
              <Typography className={classes.text}>Market</Typography>
          </div>
          <div className={classes.item}>
              <SettingsIcon className={classes.icon} />
              <Typography className={classes.text}>Settings</Typography>
          </div>
          <div className={classes.item}>
              <ExitToAppIcon className={classes.icon} />
              <Typography className={classes.text}>Logout</Typography>
          </div>
    </Container>
  )
}

export default Leftbar
