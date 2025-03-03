import React from 'react';
import '../CSS/webpages.css';
import diet from '../Images/diet.jpg';

const Breakfast = () => {
  return (
   <>
<div class="first">
<h1>Your Guide to Delicious Diet-Friendly Meals</h1>
        <h3>Wheather you are a beginne or a seasoned chef, our platform offers tips, tricks,</h3>
        <h3>and detailed instructions to help you master your cooking skils.</h3>
        <div class="searchbar">
            <input type="text" placeholder="🔍 Find it all here..." />
        </div>
    </div>

    <div class="table">
        <table>
            <tr>
                <th colspan="2">Helthy Food</th>
            </tr>
            <tr>
                <td><img src={diet} alt="df" /></td>
                <td>
                    <ul class="list">
                        <li><a href="html">▷ Tulsi Tea</a></li>
                        <li><a href="html">▷ Beetroot Soup</a></li>
                        <li><a href="html">▷ Carrot Soup</a></li>
                        <li><a href="html">▷ Wheat Khakhra</a></li>
                        <li><a href="html">▷ Mix-Veg (No Onion & Garlic)</a></li>
                        <li><a href="html">▷ Amla Sharbat</a></li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
   </>
    
  )
}

export default Breakfast