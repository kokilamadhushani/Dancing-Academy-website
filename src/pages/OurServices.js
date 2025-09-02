import React from 'react';

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#ADD8E6", // Light Blue
    color: "#333333", // Deep Charcoal
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1E90FF", // Electric Blue
    textAlign: "center",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 2rem",
    lineHeight: "1.6",
  },
  servicesGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  card: {
    backgroundColor: "#000000", // Black
    color: "#FFFFFF", // White text for contrast
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    maxWidth: "300px",
    flex: "1 1 250px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#ADD8E6", // Light Blue
    marginBottom: "0.5rem",
  },
  cardText: {
    fontSize: "1rem",
    color: "#FFFFFF", // White text for readability
  },
  cardHover: {
    transform: "scale(1.05)",
  },
};

const OurServices = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>
      <p style={styles.description}>
        At Rhythm Dance Academy, we offer a diverse range of dance programs designed to nurture talent, boost confidence, and foster creativity for all age groups and experience levels.
      </p>

      <div style={styles.servicesGrid}>
        {[
          { title: "Beginner Classes", description: "Ideal for those starting their dance journey. Learn the fundamentals with expert guidance in a supportive environment." },
          { title: "Advanced Training", description: "Intensive sessions for dancers aiming to refine techniques and prepare for stage performances or competitions." },
          { title: "Workshops", description: "Engage in specialized workshops led by guest instructors and industry professionals to expand your dance repertoire." },
          { title: "Private Coaching", description: "One-on-one sessions tailored to individual goals, perfect for auditions, competitions, or personal growth." },
          { title: "Dance Fitness", description: "Fun and energetic classes like Zumba and Dance Aerobics to improve fitness while enjoying the rhythm of dance." },
          { title: "Wedding Dance Preparation", description: "Personalized choreography for couples to make their first dance memorable and graceful." },
          { title: "Corporate Dance Programs", description: "Tailored dance sessions for corporate teams to enhance teamwork, reduce stress, and boost morale." },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(index % 2 === 0 ? styles.cardHover : {}),
            }}
          >
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
