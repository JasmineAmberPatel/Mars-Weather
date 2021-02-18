import axios from 'axios';

const getWeatherData = async () => {
    try {
        const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=OyLOo9G478lVuhrN6gW5Yxxba0YhGHHeSHaVvCj0&feedtype=json&ver=1.0');
        return response.data;
    } catch (error) {
        return "couldn't load data"
    }
};

export default getWeatherData;