import React from 'react';
import '../CSS/home.css';
import home from '../Images/home.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="logo">
        <img src={home} alt="KK" />
      </div>

      <div className="first">
        <h1>Welcome to The Kitchen King</h1>
        <h3>Your goto site for all trnending food recipes and diverse cuisines.</h3>
        <h3>Discover a world of culinary delights with us.</h3>
      </div>

      <div className="second">
        <h1>Discover Trending Food Recipes with The Kitchen King</h1>
        <h3>Explore a variety of cuisines and Trending recipes on The Kitchen King.</h3>
        <h3>Your ultimate destination for culinary inspiration.</h3>
      </div>

      <div className="button-container">
        <Link to="/recipes">
          <button className="red-button">Explore</button>
        </Link>
      </div>
    </>
  )
}

export default Home