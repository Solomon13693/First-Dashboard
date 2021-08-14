import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Navbar from "./Components/Navbar"
import { Grid } from '@material-ui/core'
import Leftbar from './Components/Leftbar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import AddPop from './Components/AddPop'

const useStyle = makeStyles((theme) => ({
  right:{
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}))

function App() {
  const classes = useStyle()
  return (
    <div>
        <Navbar/>

        <Grid container> 
        
            <Grid item sm={2} xs={2}>
                <Leftbar/>
            </Grid>

            <Grid item sm={7} xs={10} >
                <Feed/>
            </Grid>

            <Grid item sm={3} className={classes.right} >
                <Rightbar/>
            </Grid>

        </Grid>

        <AddPop/>

    </div>
  )
}

export default App
