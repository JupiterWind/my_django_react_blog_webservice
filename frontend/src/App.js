import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { myMaterialTheme as theme } from './ui/Material/Theme';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Material/Header';
import NavTab from './ui/Material/NavTab';
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
