import React from "react";
// import Header from "../components/Header";
import danceImage from "../assets/dance.jpeg";

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "lch(71.35% 24.4 260.16)", // Soft, professional full-page background
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    width: "100%",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  hero: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    color: "#b22222",
    marginBottom: "0.5rem",
  },
  heroText: {
    fontSize: "1.1rem",
    maxWidth: "700px",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
    minWidth: "280px",
  },
  heading: {
    color: "#d2691e",
    marginTop: "1rem",
  },
  list: {
    paddingLeft: "1.2rem",
  },
  image: {
    flex: 1,
    minWidth: "280px",
    textAlign: "center",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
};

const About = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* <Header /> */}
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>About Rhythm Dance Academy</h1>
          <p style={styles.heroText}>
            Rhythm Dance Academy is a premier institute for dance enthusiasts of all ages.
            With a strong focus on professional training and personal growth, we provide a supportive
            environment where passion meets discipline.
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.text}>
            <h2 style={styles.heading}>Our Mission</h2>
            <p>
              We aim to nurture creativity and confidence through movement, while promoting excellence
              in various dance styles including classical, hip hop, contemporary, and more.
            </p>

            <h2 style={styles.heading}>Why Choose Us?</h2>
            <ul style={styles.list}>
              <li>Certified and experienced instructors</li>
              <li>State-of-the-art dance studios</li>
              <li>Friendly and inclusive atmosphere</li>
              <li>Classes for beginners to advanced performers</li>
            </ul>
          </div>

          <div style={styles.image}>
            <img
              src={danceImage}
              alt="Professional dance class in session at Rhythm Dance Academy"
              style={styles.img}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
