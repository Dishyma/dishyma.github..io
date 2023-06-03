import React, { useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { RiRocketLine } from 'react-icons/ri';
import { FaSatellite, FaGlobe } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

export const Experience = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date === selectedDate ? null : date);
    };

    return (
        <section className='experience-class' id="experience-title">
            <Container className='container'>
            <div className="experience-title">
                <h2>Mis Experiencias</h2>
            </div>
            <div className="timeline prueba">
                <div className="timeline-items">
                    <div className={`timeline-item ${selectedDate === 1 ? 'active' : ''}`} onClick={() => handleDateClick(1)}>
                        <div className="timeline-icon">
                            <TiStarFullOutline />
                        </div>
                        <div className="timeline-date">2020</div>
                    </div>
                    <div className={`timeline-item ${selectedDate === 2 ? 'active' : ''}`} onClick={() => handleDateClick(2)}>
                        <div className="timeline-icon">
                            <RiRocketLine />
                        </div>
                        <div className="timeline-date">2021</div>
                    </div>
                    <div className={`timeline-item ${selectedDate === 3 ? 'active' : ''}`} onClick={() => handleDateClick(3)}>
                        <div className="timeline-icon">
                            <FaSatellite />
                        </div>
                        <div className="timeline-date">2022</div>
                    </div>
                    <div className={`timeline-item ${selectedDate === 4 ? 'active' : ''}`} onClick={() => handleDateClick(4)}>
                        <div className="timeline-icon">
                            <FaGlobe />
                        </div>
                        <div className="timeline-date">2023</div>
                    </div>
                </div>
                <div className="timeline-line" />
                {selectedDate && (
                    <div className="timeline-description">
                        {selectedDate === 1 && "Commodo sint in Lorem anim velit irure Lorem aliquip incididunt sint exercitation do labore.Enim pariatur culpa minim consequat duis culpa ad qui pariatur ea. Exercitation exercitation non consequat culpa fugiat dolor culpa quis aute labore irure elit quis. Excepteur ipsum irure ipsum dolore cupidatat velit. Reprehenderit excepteur in dolore qui enim labore nostrud ipsum non officia. Voluptate et excepteur labore eiusmod ex culpa. Eu aute exercitation nisi id irure irure exercitation dolor quis cupidatat consectetur duis. Irure do excepteur enim sit officia sunt."}
                        {selectedDate === 2 && "Deserunt do sint duis magna commodo quis elit.Deserunt minim dolore voluptate occaecat do voluptate quis dolor ut. Occaecat aliqua esse aliqua irure eu ipsum velit exercitation sint magna tempor. Proident irure dolor ut ipsum sint est pariatur. Nisi nisi veniam eu qui irure dolore eiusmod. Voluptate voluptate irure fugiat commodo ullamco. Ex aute pariatur sint minim pariatur proident sit voluptate mollit enim fugiat consequat consequat."}
                        {selectedDate === 3 && "In tempor consequat proident in.Enim mollit enim adipisicing tempor laboris velit occaecat minim nostrud eiusmod. Nulla velit culpa aliqua voluptate in commodo cillum laborum nulla in ipsum et consequat. Dolore adipisicing aliqua veniam ad quis cillum commodo aliqua proident mollit cupidatat ad ex quis. Incididunt pariatur exercitation est non ullamco esse proident ea do dolore dolore. Minim minim nisi excepteur fugiat labore."}
                        {selectedDate === 4 && "Sint non commodo et ut ea labore elit do.Aliquip laborum do cillum voluptate veniam duis velit duis mollit consequat. Amet cillum quis nostrud ut enim cupidatat irure nisi excepteur duis non dolore. Sit do ipsum labore ad. Enim ullamco proident duis ad non deserunt qui dolor ea tempor. Deserunt quis est voluptate exercitation cillum aliqua incididunt qui ut ex pariatur reprehenderit commodo. Exercitation irure consequat est adipisicing. Sit amet cupidatat esse eiusmod ut proident minim tempor."}
                    </div>
                )}

            </div>
            </Container>
            
        </section>

    );
};