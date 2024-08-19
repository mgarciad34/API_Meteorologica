const axios = require('axios');

const obtenerTiempo = async (ciudad) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: ciudad,
                appid: process.env.API_KEY,
                units: 'metric'
            }

        });

        const datosTiempo = response.data;
        return {
            city: datosTiempo.name,
            temperature: datosTiempo.main.temp,
            description: datosTiempo.weather[0].description,
        }
    }catch (error){
        throw new Error('Error fetching weather data');
    }
}

module.exports = {obtenerTiempo};