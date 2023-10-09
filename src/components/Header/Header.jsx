/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useStyles } from './styles';
import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

export default function Header({ setCoords }) {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({ lat, lng });
    }
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>Travle Adviser</Typography>
                <Box display="flex">
                    <Typography className={classes.title} style={{ marginTop: "2.5px" }}>Explore new places :</Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            className={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    </Autocomplete>

                </Box>
            </Toolbar>
        </AppBar>
    );
}
