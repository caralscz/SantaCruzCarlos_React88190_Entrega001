
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from "./CartWidget"
import Ingresar from './Ingresar';
import LogoShop from './LogoShop';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#">Com88190-shop </Navbar.Brand> */}
        <LogoShop />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Usados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mas vendidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contactenos</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <CartWidget />
         </Nav>
        <Ingresar />  
        </Navbar.Collapse>
    
       
      </Container>
    </Navbar>
  );
}

export default NavBar
