import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <ul className="social-icons">
        <li>
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>

      <ul className="menu">
        <li><a href="./">Home</a></li>
        <li><a href="./search">Search Product</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      <p>@All rights reserved</p>
    </div>
  );
}
