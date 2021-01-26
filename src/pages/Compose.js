import React, { useState } from 'react';
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

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    return (
        <div>
            <TextField id="search" label="Search Script" fullWidth />
            <p />
            <List>
                {[1, 2, 3, 4, 5].map((item) => (
                    <ListItem button>
                        <ListItemText primary={item} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <p />
            <Button variant="contained" color="primary" fullWidth onClick={handleClickOpenEdit}>
                Create New Script
                </Button>
            <EditReactDialog open={openEdit} onClose={handleCloseEdit} />
        </div>
    );
}

export default Compose;
