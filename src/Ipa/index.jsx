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
        "X-RapidAPI-Key": "65de457e5bmshed43ba5c2c86e32p17a8d8jsn87c3075d48d8",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (erorr) {
    console.log(erorr);
  }
};
