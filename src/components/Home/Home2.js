import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DÉJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy una desarrolladora Full-Stack con formación intensiva en tecnologías modernas como
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React, Node.js, bases de datos (MySQL) </b>
              </i> y herramientas de control de versiones
              <i>
                <b className="purple"> (Git)</b>.
              </i>
              <br />
              <br />
              Cuento con experiencia práctica en el diseño e implementación de aplicaciones web dinámicas y funcionales desarrolladas en proyectos académicos.
              <br />
              <br />
              Comprometida con escribir
              <i>
                <b className="purple"> código limpio, aplicar buenas prácticas de desarrollo y aprender continuamente</b>.
              </i> para adaptarse a nuevas tecnologías.
              <br />
              <br />
              Apasionada por la creación de soluciones innovadoras que mejoren la experiencia del usuario.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nath1710"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nath1710/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
