import React from 'react';

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: " #debed1",
    color: "#333",
    minHeight: "100vh",
  },
  wrapper: {
    maxWidth: "600px",
    margin: "2rem auto",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#0066cc",
    marginBottom: "1rem",
    textAlign: "center",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#555",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#0066cc",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function ContactUs() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.description}>
          Have a question or want to get in touch? We'd love to hear from you!
        </p>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Your Name</label>
            <input type="text" id="name" name="name" style={styles.input} placeholder="Enter your name" />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input type="email" id="email" name="email" style={styles.input} placeholder="Enter your email" />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="message" style={styles.textarea} placeholder="Write your message here..." />
          </div>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
