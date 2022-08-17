import React from 'react'
import { Routes, Route } from "react-router-dom";
import LayoutComponent from '../components/layout/LayoutComponent';
import HomeComponent from '../pages/home/HomeComponent';
import LoginComponent from '../pages/login/LoginComponent';


const RoutesComponent = () => {
  return <LayoutComponent>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  </LayoutComponent>
}

export default RoutesComponent