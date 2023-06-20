import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";

import arquitecturaHexa from "../assets/img/ArquitecturaHexagonal.jpg";
import fastCrud from "../assets/img/FastCrud.png";
import inventario from "../assets/img/inventario.jpg";
import colegio from "../assets/img/colegio.png";
import antMan from "../assets/img/antMan.png";
import moovie from "../assets/img/moovie.png";
import pyApp from "../assets/img/pythonApplication.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Hexagonal Architecture",
      description: "Crud with Hexagonal Arch",
      imgUrl: arquitecturaHexa,
      url: "https://github.com/Dishyma/HexagonalArchitecture"
    },
    {
      title: "FastCrud",
      description: "Crud with springboot",
      imgUrl: fastCrud,
      url: "https://github.com/Dishyma/FastCrud"
    },
    {
      title: "School Web Server",
      description: "Basic Crud with Java",
      imgUrl: colegio,
      url: "https://github.com/Dishyma/schoolWebServer"
    },
    {
      title: "Inventario Supermercado",
      description: "Basic Crud with Java",
      imgUrl: inventario,
      url: "https://github.com/Dishyma/Inventario-Supermercado"
    }, 
    {
      title: "Python Application",
      description: "Docker and python application with flask",
      imgUrl: pyApp,
      url: "https://github.com/Dishyma/PythonApplication"
    },
    {
      title: "Ant Man",
      description: "Antivirus made with Java",
      imgUrl: antMan,
      url: "https://github.com/Dishyma/AntMan"
    },
    {
      title: "Moovie",
      description: "React app, it uses the movie database",
      imgUrl: moovie,
      url: "https://github.com/Dishyma/moovie"
    }, 
    {
      title: "Inventory",
      description: "This is a springboot application, for a inventory",
      imgUrl: inventario,
      url: "https://github.com/Dishyma/Inventory"
    },          
  ];

  const projectsPerPage = 6;
  const numSlides = Math.ceil(projects.length / projectsPerPage);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
  };

  const getProjectsForCurrentSlide = () => {
    const startIndex = currentSlide * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <div className="prueba2">
                  <div className="slider-arrows">
                    <button className="prev-arrow arrow" onClick={prevSlide}>
                      <BsFillArrowLeftCircleFill/>
                    </button>
                    <button className="next-arrow arrow" onClick={nextSlide}>
                      <BsFillArrowRightCircleFill/>
                    </button>
                    </div>
                  <Row>
                    {getProjectsForCurrentSlide().map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        visible={index === currentSlide}
                      />
                    ))}
                  </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
