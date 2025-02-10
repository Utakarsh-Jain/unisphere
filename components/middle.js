import React from "react";
import Image from "next/image"; // Use next/image for optimized image handling
import step1 from "../public/step1.png";
import step2 from "../public/step2.png";
import step3 from "../public/step3.png";
import step4 from "../public/step4.png";
import step5 from "../public/step5.png";
import step6 from "../public/step6.png";

const steps = [
  { number: "01", text: "Login/Sign Up", image: step1 },
  { number: "02", text: "Select Year", image: step2 },
  { number: "03", text: "Select Semester (odd/even)", image: step3 },
  { number: "04", text: "Choose Course to prep", image: step4 },
  { number: "05", text: "Library unlocks", image: step5 },
  { number: "06", text: "Innovate with the help of provided resources", image: step6 },
];

const Middle = () => {
  return (
    <div className="middle-container">
      {/* Heading */}
      <h2 className="middle-heading">
        <span className="highlight-orange">Why we are</span> better than others?
      </h2>

      {/* Quote Section */}
      <div className="quote-box">
        <div className="quote-icon">“</div>
        <p>
          Studique stands out as a platform designed exclusively for college students, focusing on seamless collaboration, 
          innovative tools, and personalized learning paths. Unlike others, we prioritize simplicity and accessibility, 
          ensuring every student can achieve their academic goals efficiently. Our unique features are tailored to support 
          peer learning, interactive study sessions, and real-time progress tracking, making Studique the ultimate companion 
          for your educational journey.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <div className="how-it-works-title">How It Works</div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <Image src={step.image} alt={`Step ${step.number}`} className="step-image" />
              <span className="step-number">{step.number}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Middle;
