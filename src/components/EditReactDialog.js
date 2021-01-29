import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function EditReactDialog(props) {
    const classes = useStyles();
    const { onClose, open, currentDict } = props;
    const [subDisabled, setSubDisabled] = useState(true);

    const handleClose = () => {
        console.log(currentDict);
        onClose(false);
    };

    const handleSave = () => {
        let titleValue = document.getElementById('script-title').value;
        let contentValue = document.getElementById('script-content').value;
        setSubDisabled(true);
        axios.post('http://localhost:5000/api/1.0/script', {
            title: titleValue,
            script: contentValue,
        }).then(function (response) {
            onClose(true);
        }).catch(function (error) {
            console.log(error)
            setSubDisabled(false);
        });
    };

    const handleTextFieldChange = (e) => {
        let titleValue = document.getElementById('script-title').value;
        let contentValue = document.getElementById('script-content').value;
        if (titleValue.trim() !== '' && contentValue.trim() !== '') {
            setSubDisabled(false);
        } else {
            setSubDisabled(true);
        }
    };

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Edit Script
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleSave} disabled={subDisabled}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <form noValidate autoComplete="off">
                    <p />
                    <TextField id="script-title" label="Script Title" onChange={handleTextFieldChange} fullWidth />
                    <p />
                    <TextField id="script-content" label="Script Content (Enter Wrap)" onChange={handleTextFieldChange} multiline fullWidth />
                </form>
            </Container>
        </Dialog>
    );
}

export default EditReactDialog;
