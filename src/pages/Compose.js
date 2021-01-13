import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Compose extends React.Component {
    render() {
        return (
            <div>
                <List subheader={<li />}>
                    {[{ 'label': 'a', 'script': [0, 1, 2] }, { 'label': 'b', 'script': [3, 4, 5] }].map((sectionData) => (
                        <li key={`section-${sectionData.label}`}>
                            <ul>
                                <ListSubheader>{`I'm sticky ${sectionData.label}`}</ListSubheader>
                                {sectionData.script.map((item) => (
                                    <ListItem key={`item-${sectionData}-${item}`}>
                                        <ListItemText primary={`Item ${item}`} />
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    ))}
                </List>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default Compose;
