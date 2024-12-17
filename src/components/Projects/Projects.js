import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import authentication from "../../Assets/Projects/authenticationSystem.png";
import formcreditcard from "../../Assets/Projects/html5form.png";
import randomcard from "../../Assets/Projects/randomcard.png";
import rockpaperscissors from "../../Assets/Projects/rockpaperscissors.png";
import starwarsBlog from "../../Assets/Projects/starwarsBlog.png";
import todolist from "../../Assets/Projects/todolist.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mis últimos <strong className="purple">proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
        He aquí algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockpaperscissors}
              isBlog={false}
              title="Rock, Paper, Scissors"
              description="Desarrollo de un juego de piedra, papel o tijera con diseño responsive, incluye efectos de sonido para indicar victorias o derrotas y un botón para reiniciar la partida."
              ghLink="https://github.com/Nath1710/Rock-paper-scissors"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authentication}
              isBlog={false}
              title="Authentication System"
              description="Implementación de un sistema de autenticación en cuatro pasos: registro, inicio y cierre de sesión, y validación de token, utilizando renderizados condicionales y aplicando autorización adecuada con controles de acceso efectivos."
              ghLink="https://github.com/Nath1710/Natalycastaneda_latampt36_AuthenticationsystemwithPythonFlaskandReact.js"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starwarsBlog}
              isBlog={false}
              title="Star Wars Blog"
              description="Se desarrolló una aplicación web con React que consume datos de la API SWAPI.tech para mostrar información sobre personajes, vehículos y planetas del universo de Star Wars. La aplicación tiene como objetivo practicar el uso de fetch, enrutamiento con React Router, y Context API, priorizando un diseño simple y funcional."
              ghLink="https://github.com/Nath1710/NatalyCastaneda-Latam-pt-36-Starwarsblogreadinglist"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todolist"
              description="Desarrollo de una aplicación de lista de tareas (TODO List) sincronizada con una API de backend. La lista se actualiza automáticamente al agregar o eliminar tareas, y cuenta con un botón de limpieza que elimina todas las tareas en el front-end."
              ghLink="https://github.com/Nath1710/NatalyCastaneda_latam36_TodolistApplicationwithFetch"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formcreditcard}
              isBlog={false}
              title="Create a HTML5 form"
              description="Este proyecto tiene como objetivo el aprendizaje y la implementación de un formulario HTML5 responsivo, donde se han incorporado funciones en JavaScript para validar y manejar la interacción del usuario. El formulario está diseñado para recibir datos relacionados con tarjetas de crédito y pagos, proporcionando una experiencia interactiva a través de validaciones y mensajes personalizados."
              ghLink="https://github.com/Nath1710/Create-a-HTML5-form"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomcard}
              isBlog={false}
              title="Random Card Generator"
              description="Desarrollo de un generador de cartas aleatorias que muestra una nueva carta con palo y valor al actualizarse. Incluye un botón para generar cartas manualmente, un temporizador automático cada 10 segundos y opciones para personalizar el tamaño de la carta."
              ghLink="https://github.com/Nath1710/NatalyCastaneda-latam36-RandomCardGenerator-"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
