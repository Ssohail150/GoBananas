// src/App.js
import React, { useState } from 'react';
import PostList from './components/PostList';
import DogImage from './components/DogImage';
import Weather from './components/Weather';
import { Container, AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GoBananas</Typography>
        </Toolbar>
      </AppBar>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Posts" />
        <Tab label="Dog Image" />
        <Tab label="Weather" />
      </Tabs>
      <Box hidden={value !== 0}><PostList /></Box>
      <Box hidden={value !== 1}><DogImage /></Box>
      <Box hidden={value !== 2}><Weather /></Box>
    </Container>
  );
};

export default App;
