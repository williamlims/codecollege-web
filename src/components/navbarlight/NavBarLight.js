import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBarLight() {
    return (
        <Navbar bg="light" expand="lg" className='shadow-sm'>
            <Container>
                <Navbar.Brand href="#">Code College</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default NavBarLight;