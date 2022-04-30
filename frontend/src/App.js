import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/styles';
import { Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { myMaterialTheme } from './ui/Material/Theme';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      fetch('http://127.0.0.1:8000/api/blog/')
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  }, [posts]);

  return (
    <ThemeProvider theme={myMaterialTheme}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
        </Toolbar>
      </AppBar>

      <div>
        <Button color="secondary">dsfk</Button>
        {posts.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default App;
