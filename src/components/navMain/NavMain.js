import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo.svg';
import user from '../../assets/userMain.png';

function NavMain(props) {
    return (
        <>
        <Navbar expand="md" as={Col} bg="light" style={{maxHeight:55}} >
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                    <Navbar.Text className='h5 p-1' style={{fontFamily:'Rockwell', color:'black'}}>Code College</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="user-config"/>
                <Navbar.Collapse id="user-config" className="justify-content-end">
                    <Navbar.Text className='h5 m-1' style={{fontFamily:'Rockwell', color:'black'}}>
                        {props.nameUser} <a href="#l"><img src={user} width="35" height="35" className="rounded-circle" alt='Pho' /></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Navbar bg="dark" as={Col} className='shadow-sm' style={{height:70}} expand="md">      
            <Container>
                <Navbar.Text as={Col}  className='h6 mt-1' style={{fontFamily:'Arial', color:'white'}}>
                    Segunda-feira, 20 de fevereiro de 2023<br />
                    <span className='h5'>Olá, {props.nameUser}! Seja bem vindo novamente.</span>
                </Navbar.Text>
            </Container>
        </Navbar>
        </>
    );
}

export default NavMain;