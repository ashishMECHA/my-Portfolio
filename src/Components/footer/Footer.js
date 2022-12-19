import React from "react";
import "./Footer.css";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <footer>
  <div class="social">
    <p>Follow me on social media</p>
    <ul class="wrapper">
      <a href="#" target="_blank">
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span><i class="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">GitHub</span>
          <span><i class="fab fa-github"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span><i class="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span><i class="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span><i class="fab fa-twitter"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">CodePen</span>
          <span><i class="fab fa-codepen"></i></span>
        </li>
      </a>
    </ul>
  </div>
  <div class="final_text"></div>
  <p>Copyright &copy; All rights reserved
    <br/>Designed by Ashish Thakur, 2022
  </p>
</footer>
  
  );
}

export default Footer;