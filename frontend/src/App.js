import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { myMaterialTheme as theme } from './ui/Theme';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Component/Layout/Header';
import NavTab from './ui/Component/Layout/NavTab';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" fixed>
        <Header />
        <NavTab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
