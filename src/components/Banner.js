import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import pdfFile from "../assets/pdf/MateoRojasCV.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const toRotate = ["\nBackend Dev."];
    const period = 2000;

    const handleDownload = () => {
        window.open(pdfFile, "_blank");
      };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner">
            <Container id="home">
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "" } >
                                    <span className="tagline" >Bienvenidos a mi portafolio</span>
                                    <h1>{`Hi, I'm Mateo Rojas`} </h1>
                                    <h1>
                                        <span className="txt-rotate" dataPeriod="2000" data-rotate='[ "Backend dev." ]'>
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>Soy un desarrollador de software con experiencia en Java (Spring Boot) y Python (Flask), especializado en el desarrollo de backend y la implementación de APIs RESTful. Además, tengo conocimientos en infraestructura de nube, trabajando con plataformas como AWS, y habilidades en bases de datos SQL (MySQL) y NoSQL (MongoDB). También tengo experiencia en arquitectura de software,permintiendo diseñar soluciones eficientes y escalables, estoy siempre dispuesto a aprender y adoptar nuevas tecnologías para mejorar mis habilidades como desarrollador.</p>
                                    <button className="botonesBanner" onClick={() => console.log('connect')}>Conectemos<ArrowRightCircle size={25} /></button>
                                    <button className="botonesBanner" onClick={handleDownload}>Download CV<ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
