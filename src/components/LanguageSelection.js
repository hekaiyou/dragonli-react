import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function LanguageSelection(props) {
    const { language, setLanguage } = props;
    const [languageValue] = useState(language);

    const handleSelectClick = (e) => {
        console.log(e.target.value);
        if (e.target.value) {
            setLanguage(e.target.value);
        } else {
            setLanguage('');
        }
    };

    return (
        <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">Language and speaker</InputLabel>
            <Select defaultValue={languageValue} id="grouped-select" onChange={handleSelectClick}>
                <MenuItem value="auto">Automatic (自动判断)</MenuItem>
                <ListSubheader>Chinese (Cantonese, Traditional)</ListSubheader>
                <MenuItem value="zh-HK-HiuMaanNeural">HiuMaan (Neural) - 曉曼</MenuItem>
                <MenuItem value="zh-HK-HiuGaaiNeural">HiuGaai (Neural) - 曉佳</MenuItem>
                <MenuItem value="zh-HK-WanLungNeural">WanLung (Neural) - 雲龍</MenuItem>
                <ListSubheader>Chinese (Mandarin, Simplified)</ListSubheader>
                <MenuItem value="zh-CN-XiaoxiaoNeural">Xiaoxiao (Neural) - 晓晓</MenuItem>
                <MenuItem value="zh-CN-YunyangNeural">Yunyang (Neural) - 云扬</MenuItem>
                <MenuItem value="zh-CN-XiaoyouNeural">Xiaoyou (Neural) - 晓悠</MenuItem>
                <MenuItem value="zh-CN-YunyeNeural">Yunye (Neural) - 云野</MenuItem>
                <ListSubheader>Chinese (Taiwanese Mandarin)</ListSubheader>
                <MenuItem value="zh-TW-HsiaoChenNeural">HsiaoChen (Neural) - 曉臻</MenuItem>
                <MenuItem value="zh-TW-HsiaoYuNeural">HsiaoYu (Neural) - 曉雨</MenuItem>
                <MenuItem value="zh-TW-YunJheNeural">YunJhe (Neural) - 雲哲</MenuItem>
                <ListSubheader>English (US)</ListSubheader>
                <MenuItem value="en-US-JennyNeural">Jenny (Neural)</MenuItem>
                <MenuItem value="en-US-GuyNeural">Guy (Neural)</MenuItem>
                <MenuItem value="en-US-AriaNeural">Aria (Neural)</MenuItem>
                <ListSubheader>French (Canada)</ListSubheader>
                <MenuItem value="fr-CA-SylvieNeural">Sylvie (Neural)</MenuItem>
                <MenuItem value="fr-CA-AntoineNeural">Antoine (Neural)</MenuItem>
                <MenuItem value="fr-CA-JeanNeural">Jean (Neural)</MenuItem>
                <ListSubheader>French (France)</ListSubheader>
                <MenuItem value="fr-FR-DeniseNeural">Denise (Neural)</MenuItem>
                <MenuItem value="fr-FR-HenriNeural">Henri (Neural)</MenuItem>
                <ListSubheader>French (Switzerland)</ListSubheader>
                <MenuItem value="fr-CH-ArianeNeural">Ariane (Neural)</MenuItem>
                <MenuItem value="fr-CH-FabriceNeural">Fabrice (Neural)</MenuItem>
                <ListSubheader>German (Austria)</ListSubheader>
                <MenuItem value="de-AT-IngridNeural">Ingrid (Neural)</MenuItem>
                <MenuItem value="de-AT-JonasNeural">Jonas (Neural)</MenuItem>
                <ListSubheader>German (Germany)</ListSubheader>
                <MenuItem value="de-DE-KatjaNeural">Katja (Neural)</MenuItem>
                <MenuItem value="de-DE-ConradNeural">Conrad (Neural)</MenuItem>
                <ListSubheader>German (Switzerland)</ListSubheader>
                <MenuItem value="de-CH-JanNeural">Jan (Neural)</MenuItem>
                <MenuItem value="de-CH-LeniNeural">Leni (Neural)</MenuItem>
                <ListSubheader>Russian</ListSubheader>
                <MenuItem value="ru-RU-SvetlanaNeural">Svetlana (Neural) - Светлана</MenuItem>
                <MenuItem value="ru-RU-DariyaNeural">Dariya (Neural) - Дария</MenuItem>
                <MenuItem value="ru-RU-DmitryNeural">Dmitry (Neural) - Дмитрий</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageSelection;