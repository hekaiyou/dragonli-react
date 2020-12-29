import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class SynthesisLanguageSelect extends React.Component {
    renderSelect(language, label) {
        return (
            <MenuItem value={language}>{label}</MenuItem>
        );
    }

    render() {
        return (
            <FormControl fullWidth>
                <InputLabel id="tts-language-label">TTS Language</InputLabel>
                <Select labelId="tts-language-label" id="tts-language" value={this.props.language} onClick={this.props.onClick}>
                    {this.renderSelect('en-us', 'English (English en-us)')}
                    {this.renderSelect('zh-cn', '中文 (Chinese zh-cn)')}
                    {this.renderSelect('de-de', 'Deutsche (German de-de)')}
                    {this.renderSelect('es-es', 'Español (Spanish es-es)')}
                    {this.renderSelect('fr-fr', 'français (French fr-fr)')}
                    {this.renderSelect('ja-jp', '日本語 (Japanese ja-jp)')}
                    {this.renderSelect('nl-nl', 'Nederlands (Dutch nl-nl)')}
                    {this.renderSelect('ru-ru', 'русский (Russian ru-ru)')}
                    {this.renderSelect('ko-kr', '한국어 (Korean ko-kr)')}
                    {this.renderSelect('it-it', 'italiano (Italian it-it)')}
                    {this.renderSelect('pl-pl', 'Polskie (Poland pl-pl)')}
                    {this.renderSelect('sv-se', 'svenska (Sweden sv-se)')}
                    {this.renderSelect('da-dk', 'dansk (Danish da-dk)')}
                    {this.renderSelect('nb-no', 'norsk (Norwegian nb-no)')}
                    {this.renderSelect('pt-pt', 'Português (Portuguese pt-pt)')}
                </Select>
            </FormControl>
        );
    }
}

export default SynthesisLanguageSelect;
