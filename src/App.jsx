import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Recipes from './Components/Recipes';
import Breakfast from './Components/Breakfast';
import StreetFood from './Components/StreetFood';
import DietFood from './Components/DietFood';
import Dessert from './Components/Dessert';
import AboutUs from './Components/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/streetfood" element={<StreetFood />} />
        <Route path="/dietfood" element={<DietFood />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
