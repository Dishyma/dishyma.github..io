import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJava, DiPython, DiAws, DiGit, DiLinux, DiMysql, DiScrum } from 'react-icons/di';
import { SiIntellijidea, SiSpring, SiPostman, SiGnubash, SiDocker, SiFlask, SiMongodb } from 'react-icons/si';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skills = [
    
    { icon: DiJava, title: 'Java' },
    { icon: DiPython, title: 'Python' },
    { icon: SiSpring, title: 'Spring Boot' },
    { icon: SiFlask, title: 'Flask' },
    { icon: DiMysql, title: 'MySQL' },
    { icon: SiMongodb, title: 'MongoDB' },
    { icon: DiGit, title: 'Git' },
    { icon: DiAws, title: 'AWS' },
    { icon: SiDocker, title: 'Docker' },
    { icon: SiGnubash, title: 'Bash' },
    { icon: DiLinux, title: 'Linux' },
    { icon: SiPostman, title: 'Postman' },
    { icon: DiScrum, title: 'Scrum' },
    { icon: DiHtml5, title: 'HTML5' },
    { icon: DiCss3, title: 'CSS3' },
    { icon: SiIntellijidea, title: 'Intellij' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(skills.length / 4));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [skills.length]);

  const renderSkills = () => {
    const startIndex = currentSlide * 4;
    const endIndex = startIndex + 4;
    const slideSkills = skills.slice(startIndex, endIndex);

    return slideSkills.map((skill, index) => (
      <Col md={3} xs={6} key={index}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`skill ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <skill.icon size={50} />
              <h3>{skill.title}</h3>
            </div>
          )}
        </TrackVisibility>
      </Col>
    ));
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <div id="border-skills" className="border-skills">
          <div className="skills-title">
            <h2>Mis Habilidades</h2>
          </div>
          <Row>{renderSkills()}</Row>
        </div>
      </Container>
    </section>
  );
};