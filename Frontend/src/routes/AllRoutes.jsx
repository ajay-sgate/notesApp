import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/"  element={<Home/>}/>
      <Route path="/dash"  element={<Dashboard/>}/>
    </Routes>
  );
};

export default AllRoutes;
