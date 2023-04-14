import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';

function NavBarLight() {
    return (
        <Navbar bg="light" expand="lg" className='shadow-sm'>
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                    <Navbar.Text className='h5 m-1' style={{fontFamily:'Rockwell', color:'black'}}>Code College</Navbar.Text>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBarLight;