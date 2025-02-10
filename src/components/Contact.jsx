import { useState } from "react";
import "./contact.css";
import facebook from '../assets/facebook.webp'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, message } = formData;
    const mailtoLink = `mailto:ti.jagrit@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <div className="footer-container">
      <div className="contact-container" id="contact">
        <h2>Follow on: </h2>
        <div className="socia-links">
          <a href="https://www.facebook.com/jagrit.tim" target="_blank"> <img src={facebook} alt="Facebook-logo" className="social"/> </a>
          <a href="https://github.com/ti-jagrit" target="_blank"> <img src={github} alt="Github-logo" className="social"/> </a>
          <a href="https://www.linkedin.com/in/jagrit-timalsina/" target="_blank"> <img src={linkedin} alt="Linkedin-logo" className="social"/> </a>
        </div>
        <div className="border">
            
        </div>
        <div className="mail-from">
        <h2>Send Message: </h2>
            <form onSubmit={handleSubmit}>
              <div className="from-input-container">
                <label className="from-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="from-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button type="submit" className="send-email">
                Send Email
              </button>
            </form>
          </div>    
      </div>
    </div>
      <footer className="footer">
        &copy; 2025 Jagrit. All Rights Reserved.
      </footer>
      </>
  );
}