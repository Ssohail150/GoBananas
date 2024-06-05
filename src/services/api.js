// src/services/api.js
import axios from 'axios';

const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';
const DOG_API_URL = 'https://api.thedogapi.com/v1/images/search';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = '4e500690b1f6dec53371b4a99d955959'; // Your new OpenWeatherMap API key

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${JSONPLACEHOLDER_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchDogImage = async () => {
  try {
    const response = await axios.get(DOG_API_URL);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching dog image:', error);
    throw error;
  }
};

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
