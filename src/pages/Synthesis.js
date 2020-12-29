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

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="tts-key" label="TTS Key (Englist)" fullWidth />
                    <p />
                    <SynthesisLanguageSelect />
                </form>
            </div>
        );
    }
}

export default Synthesis;
