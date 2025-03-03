import React from 'react';
// import React, { useEffect } from 'react';
import '../CSS/recipes.css';
// import '../../public/JavaScript/script.js';
import chinese from '../Images/chinese.jfif';
import north from '../Images/north.jfif';
import south from '../Images/south.jpg';
import kathiyawadi from '../Images/kathiyawadi.jpg';
import italian from '../Images/italian.jpeg';
import Script from '../Components/Script.jsx';


const Recipes = () => {
    
    function recipelist(recipe) {
        let list = recipe.nextElementSibling;
        let isVisible = list.style.display === 'block';
        list.style.display = isVisible ? 'none' : 'block';
        let dropdown = recipe.querySelector(".dropdown");
        dropdown.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(-180deg)';
    }
    
    
  return (
    <>
    <div className="first">
    <h1>Access to the diverse recipes</h1>
        <h3>Kitchen King provides access to a wide range of diverse recipes,</h3>
        <h3>ensuring you never run out of culinary inspiration from traditional dishes to modern creations.</h3>
            <div className="searchbar">
                <input type="text" placeholder="🔍 Find it all here..." />
            </div>
        </div>
        
    
        {/* Chinese */}
    <div className="table">
        <div className="recipe-container">
            <div className="recipe-item">
                <div className="recipe-cuisine" onClick={(e) => recipelist(e.target)}>
                    A Taste of China: Classic Recipes to Try at Home
                    <svg className="dropdown" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="recipe-list">
                    <table>
                        <tr>
                            <td><img src={chinese} alt="china" /></td>
                            <td>
                                <ul className="list">
                                    <li><a target="_blank" href="../Recipes/Chinese/tomato-soup.html">▷ Tomato Soup</a>
                                    </li>
                                    <li><a target="_blank" href="../Recipes/Chinese/sweet-corn-soup.html">▷ Sweet Corn
                                            Soup</a></li>
                                    <li><a target="_blank" href="../Recipes/Chinese/hot&sour-soup.html">▷ Hot and Sour
                                            Soup</a></li>
                                    <li><a target="_blank" href="../Recipes/Chinese/veg-manchow-soup.html">▷ Veg Manchow
                                            Soup</a></li>
                                    <li><a target="_blank" href="../Recipes/Chinese/veg-manchurian.html">▷ Veg
                                            Manchurian</a></li>
                                    <li><a target="_blank" href="../Recipes/Chinese/paneer-chilli.html">▷ Paneer
                                            Chilli</a></li>
                                    <li><a target="_blank" href="html">▷ Veg Crispy</a></li>
                                    <li><a target="_blank" href="html">▷ Veg Spring Roll</a></li>
                                    <li><a target="_blank" href="html">▷ Chinese Bhel</a></li>
                                    <li><a target="_blank" href="html">▷ Hakkah Noodles</a></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* north indian punjabi  */}
            <div className="recipe-item">
                <div className="recipe-cuisine" onClick={(e) => recipelist(e.target)}>
                    Spice Route to Punjab: Flavorful North Indian Dishes
                    <svg className="dropdown" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="recipe-list">
                    <table>
                        <tr>
                            <td><img src={north} alt="punjabi" /></td>
                            <td>
                                <ul className="list">
                                    <li><a href="html">▷ Paneer Tikka Masala</a></li>
                                    <li><a href="html">▷ Shahi Paneer</a></li>
                                    <li><a href="html">▷ Paneer Butter Masala</a></li>
                                    <li><a href="html">▷ Paneer Lababdar</a></li>
                                    <li><a href="html">▷ Kadhai Paneer</a></li>
                                    <li><a href="html">▷ Palak Paneer</a></li>
                                    <li><a href="html">▷ Dhaba Style Tawa Paneer</a></li>
                                    <li><a href="html">▷ Paneer Handi</a></li>
                                    <li><a href="html">▷ Paneer Angara</a></li>
                                    <li><a href="html">▷ Paneer Bhurji</a></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* <!-- south indian --> */}
            <div className="recipe-item">
                <div className="recipe-cuisine" onClick={(e) => recipelist(e.target)}>
                    From Idli to Dosa: South Indian Culinary Treasures
                    <svg className="dropdown" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="recipe-list">
                    <table>
                        <tr>
                            <td><img src={south} alt="south" /></td>
                            <td>
                                <ul className="list">
                                    <li><a href="html">▷ Rasam</a></li>
                                    <li><a href="html">▷ Medu Vada</a></li>
                                    <li><a href="html">▷ Rava Idli</a></li>
                                    <li><a href="html">▷ Masala Idli Fry</a></li>
                                    <li><a href="html">▷ Masala Dosa</a></li>
                                    <li><a href="html">▷ Rava Uttapam</a></li>
                                    <li><a href="html">▷ Upma</a></li>
                                    <li><a href="html">▷ Sambhar</a></li>
                                    <li><a href="html">▷ Coconut Chutney</a></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* <!-- kathiyawadi --> */}
            <div className="recipe-item">
                <div className="recipe-cuisine" onClick={(e) => recipelist(e.target)}>
                    Gujarat on a Plate: Traditional Kathiyawadi Dishes
                    <svg className="dropdown" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="recipe-list">
                    <table>
                        <tr>
                            <td><img src={kathiyawadi} alt="gujarati" /></td>
                            <td>
                                <ul className="list">
                                    <li><a href="html">▷ Sev Tameta</a></li>
                                    <li><a href="html">▷ Baigan Ka Bharta</a></li>
                                    <li><a href="html">▷ Dal Dhokli</a></li>
                                    <li><a href="html">▷ Methi Thepla</a></li>
                                    <li><a href="html">▷ Dal Khichdi</a></li>
                                    <li><a href="html">▷ Handvo</a></li>
                                    <li><a href="html">▷ Khaman</a></li>
                                    <li><a href="html">▷ Khandvi</a></li>
                                    <li><a href="html">▷ Dhokla</a></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* <!-- italian --> */}
            <div className="recipe-item">
                <div className="recipe-cuisine" onClick={(e) => recipelist(e.target)}>
                    Pizza & Beyond: Crafting Authentic Italian Classics
                    <svg className="dropdown" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="recipe-list">
                    <table>
                        <tr>
                            <td><img src={italian} alt="italian" /></td>
                            <td>
                                <ul className="list">
                                    <li><a href="html">▷ Masala Macroni</a></li>
                                    <li><a href="html">▷ White Sauce Pasta</a></li>
                                    <li><a href="html">▷ Veg Lasagna</a></li>
                                    <li><a href="html">▷ Spaghetti</a></li>
                                    <li><a href="html">▷ Pan Pizza</a></li>
                                    <li><a href="html">▷ Tawa Pizza</a></li>
                                    <li><a href="html">▷ Paneer Makhni Pizza</a></li>
                                    <li><a href="html">▷ Cheesy Crust Pizza</a></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Recipes