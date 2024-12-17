import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Nataly Hernandez </span>
            de <span className="purple"> Colombia.</span>
            <br />
            Actualmente me encuentro en la búsqueda de mi primer empleo como <span className="purple">desarrolladora Junior</span>.
            <br />
            Estoy próxima a terminar un Bootcamp de Desarrollo Full-Stack con 4Geeks Academy.
            <br />
            <br />
            Aparte de programar, otras actividades que me gusta hacer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer deporte
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
