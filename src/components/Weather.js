// src/components/Weather.js
import React, { useState } from 'react';
import { fetchWeather } from '../services/api';
import { Container, Button, Typography, Paper, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const cities = [
  'New York',
  'London',
  'Tokyo',
  'Sydney',
  'Paris',
  'Moscow',
  'Delhi',
  'Beijing',
  'Los Angeles',
  'Rio de Janeiro',
];

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Error fetching weather data. Please check the city name or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component={Paper} style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Weather</Typography>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="city-select-label">City</InputLabel>
        <Select
          labelId="city-select-label"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '1rem' }}>
        Fetch Weather
      </Button>
      {loading && <CircularProgress style={{ marginTop: '1rem' }} />}
      {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}
      {weather && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">{weather.name}</Typography>
          <Typography>Temperature: {weather.main.temp}°C</Typography>
          <Typography>Weather: {weather.weather[0].description}</Typography>
        </div>
      )}
    </Container>
  );
};

export default Weather;
