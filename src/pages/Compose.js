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
import axios from 'axios';

function Compose() {
    const [openEdit, setOpenEdit] = useState(false);
    const [scriptList, setScriptList] = useState([]);
    const [currentItem, setCurrentItem] = useState({});

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

    const handleCloseEdit = (result) => {
        setOpenEdit(false);
        if (result) {
            let oldSearchValue = document.getElementById('search').value;
            handleScriptList(oldSearchValue);
        }
    };

    return (
        <div>
            <TextField id="search" onChange={handleTextFieldChange} label="Search Script" fullWidth />
            <p />
            <List>
                {scriptList.map((item) => (
                    <ListItem button key={item.id}>
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
        </div>
    );
}

export default Compose;
