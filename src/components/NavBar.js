import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo">
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills-title" className={activeLink === 'skills-title'? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('skills-title')}>Skills</Nav.Link>
                        <Nav.Link href="#experience-title" className={activeLink === 'experience-title'? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mateorojas1/" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""></img></a>
                            <a href="https://github.com/Dishyma" target="_blank" rel="noreferrer"><img src={navIcon3} alt=""></img></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Conectado')}><span>Conectemos</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
