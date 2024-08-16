// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import HomePage from './component/HomePage';
import HomePage1 from './component/HomePage1';
import LoginPage from './component/LoginPage'; 
import RegisterPage from './component/RegisterPage';
import theme from './component/theme';
import KitchenDesignsPage from './component/KitchenDesignsPage';
import Wardrobe from './component/Wardrobe';
import Bedroom from './component/Bedroom';
import ReferAndEarn from './component/Referandearn';
import DesignGallery from './component/DesignGallery';
import Custom from './component/Custom';
import Livingroom from './component/Livingroom';
import Bedroom1 from './component/Bedroom1';
import Bedroom2 from './component/Bedroom2';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route
              path="/register"
              element={<RegisterPage onRegister={() => setIsLoggedIn(true)} />}
            />
            <Route
              path="/login"
              element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
            />
            <Route
              path="/"
              element={<Navigate to={isLoggedIn ? "/home" : "/register"} />}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/home1"
              element={isLoggedIn ? <HomePage1 /> : <Navigate to="/login" />}
            />
            <Route
              path="/kitchen"
              element={isLoggedIn ? <KitchenDesignsPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/ward"
              element={isLoggedIn ? <Wardrobe /> : <Navigate to="/login" />}
            />
            <Route
              path="/bed"
              element={isLoggedIn ? <Bedroom /> : <Navigate to="/login" />}
            />
            <Route
              path="/refer"
              element={isLoggedIn ? <ReferAndEarn /> : <Navigate to="/login" />}
            />
            <Route
              path="/design"
              element={isLoggedIn ? <DesignGallery /> : <Navigate to="/login" />}
            />
            <Route
              path="/custom"
              element={isLoggedIn ? <Custom /> : <Navigate to="/login" />}
            />
            <Route
              path="/living"
              element={isLoggedIn ? <Livingroom/> : <Navigate to="/login" />}
            />
            <Route
              path="/bed1"
              element={isLoggedIn ? <Bedroom1/> : <Navigate to="/login" />}
            />
            <Route
              path="/bed2"
              element={isLoggedIn ? <Bedroom2/> : <Navigate to="/login" />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
