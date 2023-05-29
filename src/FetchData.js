import axios from "axios";

export const fetchData = async (name) => {
  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${name}&format=json&u=f`;
      try {
        const response = await axios.get(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '605eaa1b7dmshdf8abd04ed324e6p102897jsn0771aa8cd02d',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
          }
        });
        console.log(response)
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};








