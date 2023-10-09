/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import MarkerClusterGroup from 'react-leaflet-cluster'
import Rating from "@mui/material/Rating";
import { Paper, Typography } from '@mui/material';

import { useStyles } from "./styles";

function Map({ mapBounds, setMapBounds, coords, setCoords, places, MarkersRefs, setSelectedMarkerIndex }) {

    const handleMarkerClick = (index) => {
        setSelectedMarkerIndex(index);
        MarkersRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }

    const classes = useStyles();
    const handleMapMoveEnd = (event) => {
        if (event.target) {
            const bounds = event.target.getBounds();
            setMapBounds(bounds);
        }
    };

    // Define the custom icon
    const customIcon = L.icon({
        iconUrl: "/icon-location.svg",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <MapContainer
            center={coords}
            zoom={13}
            style={{ height: '480px', width: '100%', margin: '20px 20px 20px 0px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <MarkerClusterGroup chunkedLoading>

                {
                    places?.map((place, idx) => {
                        if (place.latitude && place.longitude) {
                            return (
                                <Marker key={idx} position={[place.latitude, place.longitude]} icon={customIcon} title={place.mame}>
                                    <Popup>
                                        <Paper onClick={() => handleMarkerClick(idx)} elevation={3} className={classes.paper}>
                                            <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                            <img
                                                className={classes.pointer}
                                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                            />
                                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                        </Paper>
                                    </Popup>
                                </Marker>
                            );
                        }
                        return null; // Return null for invalid places
                    })
                }
            </MarkerClusterGroup>
            {/* Attach event listener to the map */}
            <EventLogger onMoveend={handleMapMoveEnd} />
        </MapContainer>
    );
}

function EventLogger({ onMoveend }) {
    useMapEvents({
        moveend: onMoveend,
    });

    return null;
}

export default Map;
