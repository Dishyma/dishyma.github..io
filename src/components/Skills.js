import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJava, DiPython, DiAws, DiGit, DiLinux, DiMysql } from 'react-icons/di';
import { SiSpring, SiPostman, SiGnubash, SiDocker } from 'react-icons/si';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      
      <Container>
      <div id="border-skills" className="border-skills">
        <div className="skills-title">
          <h2>Mis Habilidades</h2>
        </div>
        <Row>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiHtml5 size={50} />
                  <h3>HTML5</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiCss3 size={50} />
                  <h3>CSS3</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiJava size={50} />
                  <h3>Java</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiPython size={50} />
                  <h3>Python</h3>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <SiSpring size={50} />
                  <h3>Spring Boot</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiMysql size={50} />
                  <h3>MySQL</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <SiGnubash size={50} />
                  <h3>Bash</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiGit size={50} />
                  <h3>Git</h3>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiAws size={50} />
                  <h3>AWS</h3>
                </div>}
            </TrackVisibility>
          </Col><Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <SiDocker size={50} />
                  <h3>Docker</h3>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <DiLinux size={50} />
                  <h3>Linux</h3>
                </div>}
            </TrackVisibility>
          </Col>

          <Col md={3} xs={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <SiPostman size={50} />
                  <h3>Postman</h3>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        </div>
      </Container>
      
      
    </section>
  );
};
