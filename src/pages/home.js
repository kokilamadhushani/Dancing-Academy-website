import React from "react";
import "./Home.css";

import dance1 from "../assets/dance1.jpeg";
import dance5 from "../assets/dance 5.webp";
import dance6 from "../assets/dance 6.webp";
import danceNew from "../assets/dance new.webp";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content container">
        <div className="home-text">
          <h1 className="home-title">
            Welcome to <span className="highlight">Rhythm Dance Academy</span>
          </h1>
          <p className="intro-text">
            Discover your passion for dance with expert guidance and a supportive community.
            Our diverse dance styles and flexible schedules make it easy for everyone to join.
          </p>

          <h2 className="section-subtitle">Our Classes</h2>
          <ul className="dance-styles">
            <li>🩰 Ballet – Classical and contemporary styles</li>
            <li>🕺 Hip Hop – Freestyle, locking, and popping</li>
            <li>🌀 Contemporary – Expressive and interpretive movement</li>
            <li>💃 Salsa, Jazz, and more!</li>
          </ul>

          <h2 className="section-subtitle">Who Can Join?</h2>
          <p className="age-group">
            <strong>For All Ages:</strong> Kids (4+), Teens, Adults & Seniors. Beginners welcome!
          </p>

          <h2 className="section-subtitle">Why Join Us?</h2>
          <ul className="benefits-list">
            <li>✔️ Certified and passionate instructors with years of experience</li>
            <li>✔️ Spacious, modern, and well-equipped dance studios</li>
            <li>✔️ Opportunities to perform on stage and participate in competitions</li>
            <li>✔️ Build confidence, coordination, creativity, and community</li>
          </ul>

          <button className="join-button" aria-label="Join Rhythm Dance Academy now">
            Join Now
          </button>
        </div>

        <div className="home-image-wrapper">
          <img
              src={dance1}
               alt="Professional dance class"
               className="home-image-large"
               loading="eager"
/>

          <div className="home-gallery" aria-label="Dance showcase gallery">
            <img src={dance5} alt="Dance Showcase 1" className="gallery-image" />
            <img src={dance6} alt="Dance Showcase 2" className="gallery-image" />
            <img src={danceNew} alt="Dance Showcase 3" className="gallery-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
