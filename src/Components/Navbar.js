
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Nav,Container,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Juventus </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link> <Link to='/Home' style={{ textDecoration: 'none',color:'white'}}>Home</Link></Nav.Link>
      <Nav.Link ><Link to='/Aboutus' style={{ textDecoration: 'none',color:'white'}}>AboutUS</Link></Nav.Link>
      <Nav.Link ><Link to='/profile' style={{ textDecoration: 'none',color:'white'}}>Profile</Link></Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  );
}

export default nav;
