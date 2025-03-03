import React from 'react';
import '../CSS/webpages.css';
import streetfood from '../Images/streetfood.jpg';

const StreetFood = () => {
  return (
    <>
     <div class="first">
        <h1>Cook like a pro</h1>
        <h3>Each dish tells a story, reflecting regional ingrediants and culinary traditions.</h3>
        <h3>Experience the thrill of tasting various street food items.</h3>
        <div class="searchbar">
            <input type="text" placeholder="🔍 Find it all here..." />
        </div>
    </div>
    
    <div class="table">
        <table>
            <tr>
                <th colspan="2">Fast Food</th>
            </tr>
            <tr>
                <td><img src={streetfood} alt="sf" /></td>
                <td>
                    <ul class="list">
                        <li><a href="html">▷ Vadapav</a></li>           
                        <li><a href="html">▷ Dabeli</a></li>
                        <li><a href="html">▷ Samosa</a></li>
                        <li><a href="html">▷ Pani-Puri</a></li>
                        <li><a href="html">▷ Veg Frankie</a></li>
                        <li><a href="html">▷ Mumbai Bhel</a></li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
       </>
        
      )
    }

export default StreetFood