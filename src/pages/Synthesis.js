import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Synthesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            url: '',
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
            let newUrl = '/api/1.0/tts?text=' + text;
            if (newUrl !== this.state.url) {
                this.setState({
                    url: newUrl,
                })
            } else {
                let ttsAudio = document.getElementById('tts-audio');
                ttsAudio.play();
            }
        }
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="tts-text" onChange={(e) => this.handleTextFieldChange(e)} label="TTS Text" multiline rows={3} fullWidth />
                    <p />
                    <Button variant="contained" color="primary" onClick={() => this.handleButtonClick()} fullWidth>
                        Text To Speech
                    </Button>
                    <audio controls id="tts-audio" autoPlay src={this.state.url} type="audio/wav" hidden>
                        Your browser does not support the audio element.
                    </audio>
                </form>
            </div>
        );
    }
}

export default Synthesis;
