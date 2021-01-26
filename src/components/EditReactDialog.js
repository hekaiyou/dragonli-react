import React from 'react';
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
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleSave = () => {
        console.log();
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
                    <Button autoFocus color="inherit" onClick={handleSave}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <form noValidate autoComplete="off">
                    <p />
                    <TextField id="script-title" label="Script Title" fullWidth />
                    <p />
                    <TextField id="script-content" label="Script Content (Enter Wrap)" multiline fullWidth />
                </form>
            </Container>
        </Dialog>
    );
}

export default EditReactDialog;
