import React from 'react';
import '../CSS/webpages.css';
import breakfast from '../Images/breakfast.jpg';

const Breakfast = () => {
  return (
   <>
<div class="first">
        <h1>Stay Updated On Trends</h1>
        <h3>Keep up with the latest food trends effortlessly.</h3>
        <h3>Kitchen King creates tending recipes, helping you stay ahead in the culinary world and impress your guests.</h3>
        <div class="searchbar">
            <input type="text" placeholder="🔍 Find it all here..." />
        </div>
    </div>

   <div class="table">
        <table>
            <tr>
                <th colspan="2">Morning Meal</th>
            </tr>
            <tr>
                <td><img src={breakfast} alt="bf" /></td>
                <td>
                    <ul class="list">
                        <li><a href="html">▷ Aloo Paratha</a></li>           
                        <li><a href="html">▷ Paneer Cheese Paratha</a></li>
                        <li><a href="html">▷ Bread Omelette</a></li>
                        <li><a href="html">▷ French Toast</a></li>
                        <li><a href="html">▷ Cheese Sandwich</a></li>
                        <li><a href="html">▷ Misal Pav</a></li>
                        <li><a href="html">▷ Aloo Sabji</a></li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
   </>
    
  )
}

export default Breakfast