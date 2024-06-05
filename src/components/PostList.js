// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';
import { Container, List, ListItem, ListItemText, TextField, Typography, Paper } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container component={Paper} style={{ marginTop: '2rem', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Posts</Typography>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;
