// COPY WRITE : MOHAMMED BELFELLAH , MAILE:mohammedbelfellah2@gmail.com


/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import { Grid } from "@mui/material";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { getPlacesData } from "./Ipa";
import InfoModal from "./components/info";
const theme = createTheme();

function App() {


  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');


  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});

  const [mapBounds, setMapBounds] = useState(null);
  useEffect(() => {

    const initialMapBounds = {
      _southWest: {
        lat: coords.lat - 0.7,
        lng: coords.lng - 0.14,
      },
      _northEast: {
        lat: coords.lat + 0.7,
        lng: coords.lng + 0.14,
      },
    };
    setMapBounds(initialMapBounds);

    // Fetch data based on initial coordinates (coords)
    if (coords.lat && coords.lng) {
      getPlacesData(initialMapBounds._northEast, initialMapBounds._southWest).then((data) => {
        setPlaces(data);
      });
    }
  }, [coords]);



  useEffect(() => {  // filter the result based on Rating
    const filtered = places.filter((place) => Number(place.rating) > rating); // rating of this palce  > curant rating palce
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {    // get currant location
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {  // get data from Rapide ipa based on (bounds)
    setIsLoading(true);
    getPlacesData(type, mapBounds?._northEast, mapBounds?._southWest).then((data) => {
      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      setFilteredPlaces([]);
      setRating('');
      setIsLoading(false);
    });
  }, [mapBounds, type]);  /// <---- coords !!! for the []

  const MarkersRefs = useRef(Array(places?.length).fill(null));  // may be i will thing about useEfffect ? // i put this useRef here i need the places data

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InfoModal />
      <Header setCoords={setCoords} />
      <Grid
        container
        spacing={3}
        style={{ width: "100", height: "100vh ! important" }}
      >
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            MarkersRefs={MarkersRefs}
            selectedMarkerIndex={selectedMarkerIndex}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          {Object.keys(coords).length > 0 ? ( // Check if coords has data
            <Map MarkersRefs={MarkersRefs}
              places={places}
              mapBounds={mapBounds}
              setMapBounds={setMapBounds}
              coords={coords}
              setCoords={setCoords}
              setSelectedMarkerIndex={setSelectedMarkerIndex}
            />
          ) : (
            <p>Loading geolocation data...</p>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
