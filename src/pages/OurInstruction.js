import React from "react";

const styles = {
  container: {
    padding: "3rem 1.5rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "lch(67.78% 32.27 350.14)",
    color: "#222",
    lineHeight: "1.7",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#3A0CA3",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#3A0CA3",
    margin: "2rem 0 1rem",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "1.05rem",
    maxWidth: "800px",
    margin: "0 auto 1.5rem",
    textAlign: "justify",
  },
  list: {
    maxWidth: "800px",
    margin: "1rem auto",
    paddingLeft: "1.5rem",
  },
  listItem: {
    marginBottom: "0.75rem",
    fontSize: "1.05rem",
    color: "#444",
  },
};

const OurInstruction = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meet Our Instructors</h1>

      <p style={styles.paragraph}>
        At Rhythm Dance Academy, our instructors are more than teachers—they are seasoned professionals, artists, and mentors passionate about dance and dedicated to helping every student thrive.
      </p>

      <h2 style={styles.subtitle}>What Makes Them Exceptional?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Professionally trained with certifications in multiple dance forms
        </li>
        <li style={styles.listItem}>
          Extensive experience in both teaching and live performances
        </li>
        <li style={styles.listItem}>
          Patient, adaptable, and encouraging teaching approach
        </li>
        <li style={styles.listItem}>
          Committed to nurturing confidence and growth in every student
        </li>
      </ul>

      <p style={styles.paragraph}>
        Whether you're stepping onto the dance floor for the first time or gearing up for a competitive audition, our instructors are here to inspire, guide, and support your journey every step of the way.
      </p>
    </div>
  );
};

export default OurInstruction;
