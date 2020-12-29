import React from 'react';
import TextField from '@material-ui/core/TextField';
import SynthesisLanguageSelect from '../components/synthesis/SynthesisLanguageSelect.js';

class Synthesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en-us',
        };
    }

    handleLanguageSelect(i) {
        const newLanguage = i.target.value;
        this.setState({
            language: newLanguage,
        });
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="tts-key" label="TTS Key (Englist)" fullWidth />
                    <p />
                    <SynthesisLanguageSelect language={this.state.language} onClick={i => this.handleLanguageSelect(i)} />
                </form>
            </div>
        );
    }
}

export default Synthesis;
