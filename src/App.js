import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
