import React from "react";
import Image from "next/image"; // Use next/image for optimized image handling
import heroImage from "../public/hero-image.png"; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Where College <br />
          Minds Meet <br />
          Growth — <span>Join Studique!</span>
        </h1>
        <p>
          An educational platform empowering students to learn and grow together.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Search the course you want" />
          <button className="search-button">Search</button>
        </div>

        <div className="course-tags">
          <div className="tag highlight">Data Structure & Algo.</div>
          <div className="tag">Operating System</div>
          <div className="tag">Chemistry</div>
          <div className="tag">Semi-Conductor</div>
          <div className="tag">Advance Calculus</div>
        </div>
      </div>

      <div className="hero-image">
        <Image src={heroImage} alt="Hero" />
        <div className="circle purple"></div>
        <div className="circle orange"></div>
      </div>
    </div>
  );
};

export default Hero;
