/* eslint-disable react/prop-types */
// import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
import { useStyles } from "./styles";

export default function PlaceDetails({ place, isSelected }) {
  const classes = useStyles();
  return (
    <Card elevation={6} className={isSelected?classes.marker:""}>
      <CardMedia
        title={place.name}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        style={{ height: "200px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend"> out of 
            {place.num_reviews} review 
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1"> Price</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award,idx) => (
          <Box key={idx} display="flex" justifyContent="space-between">
            <img src={award.images.small} alt={award.display_name} />
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <LocationOnIcon />{" "}
            {place?.address_obj?.street1 +
              " " +
              place?.address_obj?.city +
              " " +
              place?.address_obj?.country}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
