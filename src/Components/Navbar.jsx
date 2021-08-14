import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';

const useStyle = makeStyles((theme) => ({
    toolbar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? "flex" : "none",
            width: "70%"
          },
    },
    searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none",
          },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    cancel:{
        [theme.breakpoints.up('sm')]: {
            display: "none",
          },
    },
    logoLg: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    logoSm: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    },
    icons:{
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex"
    },
    badge:{
        marginRight: theme.spacing(2)
    }
}))

function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyle({open})
    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>

                <Typography className={classes.logoLg} variant="h6">Shalom Brand</Typography>
                <Typography className={classes.logoSm} variant="h6">Shalom</Typography>

                <div className={classes.search}>
                        <SearchIcon />
                        <InputBase className={classes.input} placeholder="Search…"/>
                        <CancelIcon className={classes.cancel} onClick={() => setOpen(false)} />
                </div>

                <div className={classes.icons}>
                <SearchIcon className={classes.searchBtn} onClick={() => setOpen(true)} />
                    <Badge className={classes.badge} badgeContent={4} color="secondary"> <MailIcon /> </Badge>
                    <Badge className={classes.badge} badgeContent={4} color="secondary"> <NotificationsIcon /> </Badge>
                    <Avatar alt="Remy Sharp" src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/119606636_336098347630734_4733916365893799315_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFKVIdLqzYpxYP2YjVmpwG2mjbtsxMlfHSaNu2zEyV8dEm7w6R3gzn_pac7DOgzKoeGB0ONU1axVYRg-qDnTL8S&_nc_ohc=1kiIACl39s0AX_OYuu0&_nc_ht=scontent.flos1-2.fna&oh=9f18042b0b4dd7ec70d8e211716ed8d0&oe=613AE75D" />
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
