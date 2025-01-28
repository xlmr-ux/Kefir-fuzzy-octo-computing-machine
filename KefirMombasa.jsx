import React from "react";
import "./KefirMombasa.css";

const KefirMombasa = () => {
  return (
    <div id="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Kefir Mombasa</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <h2>Welcome to Kefir Mombasa</h2>
        <p>
          Discover the healthiest and tastiest fermented milk drink in Mombasa.
          Perfect for your gut health!
        </p>
        <div className="product">
          <img
            src="https://via.placeholder.com/300"
            alt="Kefir"
          />
          <h3>500ml Kefir</h3>
          <p>Price: KES 2,000</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us:</p>
        <ul>
          <li>Email: info@kefirmombasa.com</li>
          <li>Phone: +254 700 123456</li>
          <li>Location: Mombasa, Kenya</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Kefir Mombasa. All rights reserved.</p>
        <p>
          Follow us:{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          |{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default KefirMombasa;
