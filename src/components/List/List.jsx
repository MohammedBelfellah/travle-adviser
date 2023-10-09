/* eslint-disable react/prop-types */

import PlaceDetails from "../PlaceDetailes/PlaceDetailes";

import {
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    CircularProgress,
} from "@mui/material";

import { useStyles } from "./styles";



export default function List({ places, isLoading, type, setType, setRating, rating, MarkersRefs, selectedMarkerIndex }) {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography style={{ marginBottom: "15px" }} variant="h6">
                Restaurants, Hotels & Attractions around you
            </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="type-label">Type</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="type-label"
                                    variant="standard"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <MenuItem value="restaurants">Restaurants</MenuItem>
                                    <MenuItem value="hotels">Hotels</MenuItem>
                                    <MenuItem value="attractions">Attractions</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="rating-label">Rating</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="rating-label"
                                    variant="standard"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <MenuItem value={0}>All</MenuItem>
                                    <MenuItem value={3}>Above 3.0</MenuItem>
                                    <MenuItem value={4}>Above 4.0</MenuItem>
                                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid

                                key={i}
                                item xs={12}
                                ref={(domElement) =>
                                    (MarkersRefs.current[i] = domElement)
                                }
                            >
                                <PlaceDetails place={place} isSelected={selectedMarkerIndex === i ? true : false} />
                            </Grid>
                            )
                        )}
                    </Grid>
                </>
            )}

        </div>
    );
}
