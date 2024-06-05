// src/components/DogImage.js
import React, { useState, useEffect } from 'react';
import { fetchDogImage } from '../services/api';
import { Container, Typography, Button, Paper } from '@mui/material';

const DogImage = () => {
  const [dogImage, setDogImage] = useState(null);

  const getDogImage = async () => {
    try {
      const data = await fetchDogImage();
      setDogImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDogImage();
  }, []);

  return (
    <Container component={Paper} style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Random Dog Image</Typography>
      {dogImage && (
        <img 
          src={dogImage.url} 
          alt="Random Dog" 
          style={{ maxWidth: '100%', height: 'auto', margin: 'auto', display: 'block' }} 
        />
      )}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={getDogImage} 
        style={{ marginTop: '1rem', display: 'block', margin: 'auto' }}
      >
        Fetch New Image
      </Button>
    </Container>
  );
};

export default DogImage;
