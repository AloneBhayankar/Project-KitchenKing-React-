import React from 'react';
import '../CSS/webpages.css';
import dessert from '../Images/dessert.jpeg';

const Breakfast = () => {
  return (
   <>
<div class="first">
 <h1>Your Ultimate Dessert Destination</h1>
        <h3>We believe that every meal deserves a sweet finish. Our collection of recipes, tips, and inspirations will help you whip up delicious confections for any occasion. You’ll find something to satisfy your sweet tooth and spark your creativity.</h3>
        
        <div class="searchbar">
            <input type="text" placeholder="🔍 Find it all here..." />
        </div>
    </div>

    <div class="table">
        <table>
            <tr>
                <th colspan="2">Sweets</th>
            </tr>
            <tr>
                <td><img src={dessert} alt="ds" /></td>
                <td>
                    <ul class="list">
                        <li><a href="html">▷ Christmas Cake</a></li>
                        <li><a href="html">▷ Chocolate Brownies</a></li>
                        <li><a href="html">▷ Blueberry Pie</a></li>
                        <li><a href="html">▷ Chocolate Truffles</a></li>
                        <li><a href="html">▷ Fruit Custard</a></li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
   </>
    
  )
}

export default Breakfast