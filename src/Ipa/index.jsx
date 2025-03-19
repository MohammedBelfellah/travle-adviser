import axios from "axios";
export const getPlacesData = async (type,ne , sw) => {  //sw, ne <---AS APROPES 
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw?.lat,
        tr_latitude: ne?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
      },
      headers: {
        "X-RapidAPI-Key": "X-RapidAPI-Key-here",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (erorr) {
    console.log(erorr);
  }
};
