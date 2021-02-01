import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';

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

function getSteps(scripts) {
    if (scripts) {
        let scriptArr = scripts.split(/[\s\n]/).filter(_ => _);
        return scriptArr;
    } else {
        return [];
    }
}

function getStepContent(step, script) {
    switch (script) {
        case 0:
            return ``;
        default:
            return `占个位置`;
    }
}

function BroadcastDialog(props) {
    const classes = useStyles();
    const { onClose, open, currentDict } = props;
    const [activeStep, setActiveStep] = useState(0);
    const [url, setUrl] = useState('');
    const steps = getSteps(currentDict.script);

    const handleClose = () => {
        setActiveStep(0);
        onClose();
    };

    const handleNext = (index) => {
        if (index + 1 < steps.length) {
            // 第一层：排除最后一个元素的点击
            let next_script = steps[index + 1].trim();
            if (next_script !== '') {
                let newUrl = 'http://speech.atp.leedarson.lds/api/1.0/tts?text=' + next_script;
                if (newUrl !== url) {
                    setUrl(newUrl);
                } else {
                    let ttsAudio = document.getElementById('tts-audio-script');
                    ttsAudio.play();
                }
            }
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {currentDict.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent(index, label)}</Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => { handleNext(index) }}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All the sounds have been played !</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </div>
            </Container>
            <audio controls id="tts-audio-script" autoPlay src={url} type="audio/wav" hidden>
                Your browser does not support the audio element.
            </audio>
        </Dialog>
    );
}

export default BroadcastDialog;