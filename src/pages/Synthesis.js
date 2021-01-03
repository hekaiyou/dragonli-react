import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Synthesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            history: ['sj'],
        };
    }

    handleTextFieldChange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    handleButtonClick() {
        const text = this.state.text;
        if (text.trim() !== '') {
            const history = this.state.history;
            history.push(text);
            this.setState({
                history: history,
            })
        }
    }

    render() {
        const textAndAudio = this.state.history.forEach((item) => {
            return (
                <Typography>
                    {item}
                    <audio controls autoPlay src="http://0.0.0.0:5000/?text={item}" type="audio/wav">
                        Your browser does not support the audio element.
                    </audio>
                </Typography>
            );
        });

        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="tts-text" onChange={(e) => this.handleTextFieldChange(e)} label="TTS Text" multiline rows={3} fullWidth />
                    <p />
                    <Button variant="contained" color="primary" onClick={() => this.handleButtonClick()} fullWidth>
                        Text To Speech
                    </Button>
                    <p />
                    <Card>
                        <CardContent>
                            {textAndAudio}
                        </CardContent>
                    </Card>
                </form>
            </div>
        );
    }
}

export default Synthesis;
