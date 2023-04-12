import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.png';

function NavBarLight() {
    return (
        <Navbar bg="light" expand="lg" className='shadow-sm'>
            <Container>
                <Navbar.Brand href="#">
                    <Image src={logo} style={{width:'35%'}}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBarLight;