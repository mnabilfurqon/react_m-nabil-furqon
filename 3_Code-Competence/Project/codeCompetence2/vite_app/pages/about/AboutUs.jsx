import React from "react";
import aboutUsImg from "./images/about-us-img.png";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <img src={aboutUsImg} alt="About Us" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lectus mauris, sed dapibus ipsum bibendum id. Praesent vel nunc non nisi pharetra vestibulum in eget dolor. Nullam auctor magna ac nunc dapibus, vel malesuada massa bibendum. Nulla at enim dolor. Nullam eget sapien quam. Integer scelerisque libero quis tristique blandit. In mollis lectus vel augue posuere vestibulum.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;