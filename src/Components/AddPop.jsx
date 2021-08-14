import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Container, Fab, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { Alert } from '@material-ui/lab';

const useStyle = makeStyles((theme) => ({
    tooltip: {
        position: 'fixed',
        bottom: 30,
        right: 30,
    },
    container: {
        background: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        height: 540,
        width: 500,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%'
        },
    },
    item: {
        marginBottom: theme.spacing(3)
    },
    root: {
        paddingTop: theme.spacing(2)
    }
}))

function AddPop() {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

    const classes = useStyle()
    return (
        <>
            <Tooltip onClick={() => setOpen(true)} className={classes.tooltip} title="Add" aria-label="add">
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal open={open} >
                <Container className={classes.container}>
                    <form className={classes.root} noValidate autoComplete="off">

                        <div className={classes.item}>
                            <TextField
                                id="standard-basic" label="Title" variant="outlined"
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div className={classes.item}>
                            <TextField
                                style={{ width: '100%' }}
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="outlined"
                            />
                        </div>

                        <div className={classes.item}>
                            <TextField select value="Public" style={{ width: '100%' }}>
                                <MenuItem value="Public" >Public</MenuItem>
                                <MenuItem value="Private" >Private</MenuItem>
                                <MenuItem value="Unlisted" >Unlisted</MenuItem>
                            </TextField>
                        </div>

                        <div className={classes.item}>
                            <FormControl variant="outlined" component="fieldset" style={{ width: '100%' }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className={classes.item}>
                            <Button onClick={() => setOpenAlert(true)} color="primary" variant="outlined" style={{ marginRight: '10px' }}>Submit</Button>
                            <Button onClick={() => setOpen(false)} color="secondary" variant="outlined" style={{ marginRight: '10px' }}>Cancel</Button>
                        </div>

                    </form>
                </Container>
            </Modal>

            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={openAlert} onClose={handleClose} autoHideDuration={4000}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>

        </>
    )
}

export default AddPop
