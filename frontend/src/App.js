import React from 'react';
import { Provider } from 'react-redux';
import store from './features/configureStore';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { myMaterialTheme as theme } from './styles/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Home from './screens/Home';
import Footer from './components/layout/Footer';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm" fixed>
            <Header />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Container>
          <ToastContainer />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
