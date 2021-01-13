import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditReactDialog from '../components/EditReactDialog.js';

class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openEdit: false,
        };
    }

    handleClickOpenEdit() {
        this.setState({
            openEdit: true,
        });
    }

    handleCloseEdit() {
        this.setState({
            openEdit: false,
        });
    }

    render() {
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
                <Button variant="contained" color="primary" fullWidth onClick={() => this.handleClickOpenEdit()}>
                    Create New Script
                </Button>
                <EditReactDialog open={this.state.openEdit} onClose={() => this.handleCloseEdit()} />
            </div>
        );
    }
}

export default Compose;
