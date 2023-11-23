import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default AllRoutes;
