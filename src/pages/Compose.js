import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Compose extends React.Component {
    render() {
        return (
            <div>
                <TextField id="search" label="Search Script" fullWidth />
                <p />
                <List>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <ListItem button>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <p />
                <Button variant="contained" color="primary" fullWidth>
                    Create New Script
                </Button>
            </div>
        );
    }
}

export default Compose;
