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
                <Select labelId="tts-language-label" id="tts-language">
                    {this.renderSelect('en-us', 'English (English en-us)')}
                    {this.renderSelect('zh-cn', '中文 (Chinese zh-cn)')}
                    {this.renderSelect('de-de', 'Deutsche (German de-de)')}
                    {this.renderSelect('es-es', 'Español (Spanish es-es)')}
                    <MenuItem value="fr-fr">français (French fr-fr)</MenuItem>
                    <MenuItem value="ja-jp">日本語 (Japanese ja-jp)</MenuItem>
                    <MenuItem value="nl-nl">Nederlands (Dutch nl-nl)</MenuItem>
                    <MenuItem value="ru-ru">русский (Russian ru-ru)</MenuItem>
                    <MenuItem value="ko-kr">한국어 (Korean ko-kr)</MenuItem>
                    <MenuItem value="it-it">italiano (Italian it-it)</MenuItem>
                    <MenuItem value="pl-pl">Polskie (Poland pl-pl)</MenuItem>
                    <MenuItem value="sv-se">svenska (Sweden sv-se)</MenuItem>
                    <MenuItem value="da-dk">dansk (Danish da-dk)</MenuItem>
                    <MenuItem value="nb-no">norsk (Norwegian nb-no)</MenuItem>
                    <MenuItem value="pt-pt">Português (Portuguese pt-pt)</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default SynthesisLanguageSelect;
