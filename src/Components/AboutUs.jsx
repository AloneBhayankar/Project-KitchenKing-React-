import React from 'react';
import '../CSS/aboutus.css';
import aboutus from '../Images/aboutus.png';
import ranveer from '../Images/ranveer.jpg';
const AboutUs = () => {
  return (
    <>
    <div class="logo">
        <a href="/"><img src={aboutus} alt="" /></a>
    </div>
    <div class="first">
        <h1>Welcome to The Kitchen King!</h1>
        <h3>At Kitchen King, we believe that cooking should be a joyous and fulfilling experience for everyone. Whether
            you’re a seasoned chef or just starting your culinary journey, our mission is to inspire you to create
            delicious meals and explore the world of flavors</h3>
    </div>

    <div class="second">
        <h1>Who We Are?</h1>
        <h3>Founded by a group of passionate food enthusiasts, Kitchen King is your go-to resource for all things
            cooking. We share a diverse array of recipes, cooking tips, kitchen hacks, and product reviews, ensuring you
            have everything you need to elevate your cooking game. Our team is dedicated to making cooking accessible,
            fun, and exciting!</h3>
        <h1>Our Philosophy!</h1>
        <h3>We understand that the kitchen is the heart of the home. That’s why we aim to provide content that not only
            satisfies your taste buds but also nourishes your creativity. Our recipes are crafted with love, and our
            tips are designed to help you streamline your cooking process. We believe that every meal is an opportunity
            to connect with loved ones and create lasting memories.</h3>
        <h1>Join Our Community..</h1>
        <h3>We invite you to join our vibrant community of food lovers! Share your culinary adventures, ask questions,
            and connect with fellow cooks through our blog and social media channels. Together, we can inspire one
            another to explore new ingredients, try innovative recipes, and discover the joy of cooking.</h3>
        <h1>Happy cooking!</h1>
    </div>
    <hr />

    <div class="third">
        <table>
            <tr>
                <td rowspan="8"><a target="_blank" href="https://www.youtube.com/@RanveerBrar"><img src={ranveer} alt="chef" /><h6>-Ranveer Singh Brar</h6></a></td>
                <th>Meet Our Partnered Chef</th>
            </tr>
            <tr>
                <td>At Kitchen King, we are proud to collaborate with talented chef who bring a wealth of experience, creativity, and passion for cooking. Our partnered chef share our mission of making cooking enjoyable and accessible for everyone, and they contribute their unique culinary insights to our blog.</td>
            </tr>
            <tr>
                <th>Why Partner with Us?</th>
            </tr>
            <tr>
                <td>Each chef we partner with is dedicated to inspiring home cooks and food enthusiasts. Through their expert tips, signature recipes, and culinary advice, they help you explore new techniques and flavors in your kitchen. Our chef come from diverse backgrounds, bringing their unique cultures and experiences to enrich our community.</td>
            </tr>
            <tr>
                <th>Get Inspired</th>
            </tr>
            <tr>
                <td>Whether you’re looking for gourmet meals or quick weeknight dinners, our partnered chef offer something for everyone. From traditional dishes to innovative creations, you’ll find recipes that will tantalize your taste buds and elevate your cooking skills.</td>
            </tr>
            <tr>
                <th>Join the Journey</th>
            </tr>
            <tr>
                <td>As we continue to grow, we invite you to follow our partnered chef’ culinary journeys. Discover their stories, explore their favorite recipes, and learn cooking techniques that will empower you in the kitchen. Together, we can make every meal a memorable experience.</td>
            </tr>
        </table>
        <h4>Thank you for being part of the Kitchen King community. Let’s cook, create, and celebrate delicious food together!</h4>
    </div>
    </>
  )
}

export default AboutUs