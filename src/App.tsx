import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;

