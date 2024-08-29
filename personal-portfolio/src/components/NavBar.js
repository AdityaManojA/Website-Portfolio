import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

export const NavBar =()=> {
    const[activeLink,setActiveLink]=useState('home');
    const [scrolled,seScrolled]=useState(false);

    useEffect(()=> {
        const onScroll =()=>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
    },[])
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
      <img src ={''} alt = "Logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </ Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="Projects">Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src ={} alt=""/></a>
                <a href="#"><img src ={} alt=""/></a>
                <a href="#"><img src ={} alt=""/></a>

            </div>
            <button className="vvd" onClick={()=> console.log ('connect')}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}