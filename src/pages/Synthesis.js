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
            this.setState({
                url: '/api/1.0/tts?text=' + text,
            })
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
                    <p />
                    <audio controls autoPlay src={this.state.url} type="audio/wav">
                        Your browser does not support the audio element.
                    </audio>
                </form>
            </div>
        );
    }
}

export default Synthesis;
