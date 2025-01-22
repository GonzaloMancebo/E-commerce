"use client";
import Header from "../Components/Header/Header";
import "./About.css";

// Importar FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faAws,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons"; // Íconos de marcas
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Íconos sólidos

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        {/* Sección de introducción */}
        <p>
          Hello there! I'm Gonzalo Mancebo, the passionate developer behind this website. With a keen eye for detail and a
          love for crafting seamless digital experiences, I set out to create a unique and user-friendly online shopping
          platform.
        </p>

        {/* Sección de frameworks y tecnologías */}
        <h1>Frameworks and Technologies Used</h1>
        <p>
          This website leverages modern frameworks and technologies to provide a cutting-edge experience. React serves as
          the backbone of the frontend, offering dynamic and responsive interactions.
        </p>
        <div className="framework">
  <FontAwesomeIcon icon={faReact} className="framework-icon react-icon" />
  <FontAwesomeIcon icon={faCss3Alt} className="framework-icon tailwind-icon" />
</div>

{/* Sección del backend */}
<h1>A Glimpse into the Backend</h1>
<p>
  While my expertise primarily lies in frontend development, I've integrated Node.js and Express.js on the
  backend to ensure a robust and efficient server-side infrastructure. This combination allows for smooth
  communication between the frontend and the server, ensuring a seamless user experience.
</p>
<div className="framework">
  <FontAwesomeIcon icon={faNodeJs} className="framework-icon node-icon" />
  <FontAwesomeIcon icon={faAws} className="framework-icon aws-icon" />
  <FontAwesomeIcon icon={faDatabase} className="framework-icon firebase-icon" />
</div>

      </div>
    </div>
  );
}

export default About;
