import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditReactDialog from '../components/EditReactDialog.js';
import BroadcastDialog from '../components/BroadcastDialog.js';
import FillingDialog from '../components/FillingDialog.js';
import axios from 'axios';

function Compose() {
    const [openEdit, setOpenEdit] = useState(false);
    const [openBroadcast, setOpenBroadcast] = useState(false);
    const [openFilling, setOpenFilling] = useState(false);
    const [scriptList, setScriptList] = useState([]);
    const [currentItem, setCurrentItem] = useState({});
    const [url, setUrl] = useState('');
    const [fillList, setFillList] = useState([]);

    useEffect(() => {
        handleScriptList('');
        // eslint-disable-next-line
    }, []);

    const handleScriptList = (searchValue) => {
        axios.get('/api/1.0/script', {
            params: {
                search: searchValue,
            }
        }).then(function (response) {
            setScriptList(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };

    const handleTextFieldChange = (e) => {
        let newSearchValue = e.target.value;
        handleScriptList(newSearchValue);
    };

    const handleClickOpenEdit = (item) => {
        setCurrentItem(item);
        setOpenEdit(true);
    };

    const handleClickOpenBroadcast = (item) => {
        let scriptList = item['script'].split(/[\s\n]/).filter(_ => _);
        let reg = /(?<={).*?(?=(}|$))/g;
        let valueList = [];
        if (item['script'].search(reg) !== -1) {
            item['script'].match(reg).map(function (v) {
                if (valueList.indexOf(v) === -1) {
                    valueList.push(v);
                }
                return null;
            });
            setCurrentItem(item);
            setFillList(valueList);
            handleOpenFilling();
        } else {
            handlePlay(scriptList[0]);
            setCurrentItem(item);
            setOpenBroadcast(true);
        }
    };

    const handleOpenFilling = () => {
        setOpenFilling(true);
    }

    const handleCloseEdit = (result) => {
        setOpenEdit(false);
        if (result) {
            let oldSearchValue = document.getElementById('search').value;
            handleScriptList(oldSearchValue);
        }
    };

    const handleCloseBroadcast = () => {
        setOpenBroadcast(false);
    };

    const handleCloseFilling = () => {
        setOpenFilling(false);
    };

    const handlePlay = (playText) => {
        if (playText !== '') {
            let newUrl = '/api/1.0/tts?text=' + playText;
            if (newUrl !== url) {
                setUrl(newUrl);
            } else {
                let ttsAudio = document.getElementById('tts-audio-script');
                ttsAudio.play();
            }
        }
    };

    const handleSaveFilling = (fillDict) => {
        setOpenFilling(false);
        let nowDict = currentItem;
        let nowcItem = nowDict['script'];
        for (var key in fillDict) {
            let repKey = '{' + key + '}';
            nowcItem = nowcItem.split(repKey).join(fillDict[key]);
        }
        nowDict['script'] = nowcItem;
        handlePlay(scriptList[0]);
        setCurrentItem(nowDict);
        setOpenBroadcast(true);
    }

    return (
        <div>
            <TextField id="search" onChange={handleTextFieldChange} label="Search Script" fullWidth />
            <p />
            <List>
                {scriptList.map((item) => (
                    <ListItem button key={item.id} onClick={() => { handleClickOpenBroadcast(item) }}>
                        <ListItemText primary={item.title} />
                        <ListItemSecondaryAction onClick={() => { handleClickOpenEdit(item) }}>
                            <IconButton edge="end" aria-label="edit">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <p />
            <Button variant="contained" color="primary" fullWidth onClick={() => { handleClickOpenEdit({}) }}>
                Create New Script
            </Button>
            <EditReactDialog open={openEdit} onClose={handleCloseEdit} currentDict={currentItem} />
            <BroadcastDialog open={openBroadcast} onClose={handleCloseBroadcast} currentDict={currentItem} setUrl={setUrl} handlePlay={handlePlay} />
            <FillingDialog open={openFilling} onClose={handleCloseFilling} fillList={fillList} onSave={handleSaveFilling} />
            <audio controls id="tts-audio-script" autoPlay src={url} type="audio/wav" hidden>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Compose;
