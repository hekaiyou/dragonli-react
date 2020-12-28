import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <FilterTiltShiftIcon />
            </ListItemIcon>
            <ListItemText primary="OnePage" />
        </ListItem>
        <ListItem button component={Link} to="/two">
            <ListItemIcon>
                <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="TwoPage" />
        </ListItem>
    </div>
);