import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { AiFillGoogleSquare } from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import img from '../../assets/logoLogin.png';

function Login() {
    return (
        <>
            <NavBarLight />
            <Container className="mt-5 shadow" style={{ maxWidth: '360px', borderRadius: 10}}>
                <Form style={{marginLeft:15, marginRight: 15}}>
                    <br />
                    <Form.Group className="mb-3"  id="groupOptions">
                        <Image style={{width:'65%'}} src={img}/>
                    </Form.Group>
                    <Row className="mt-3 mb-3">
                        <Form.Group as={Col} controlId="emailLogin">
                            <Form.Control type="email" placeholder="Insira seu e-mail" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="passwordLogin">
                            <Form.Control type="password" placeholder="Insira sua senha" />
                        </Form.Group>
                    </Row>

                    <Button className="w-100" variant="primary" type="submit">
                        Entrar
                    </Button>

                    <Form.Group className="mb-3"  id="groupOptions">
                        <Nav.Link to="/recover-password" key="home" style={{fontSize: 14}} as={NavLink}>Esqueçeu sua senha?</Nav.Link>
                        <Nav.Link to="/register" style={{fontSize: 14, color:'blue'}} key="home" as={NavLink}>Criar novo cadastro.</Nav.Link>
                    </Form.Group>

                    <Button className="w-100 mb-5" variant="danger" type="submit">
                        <AiFillGoogleSquare /> Entrar com Google
                    </Button>

                </Form>
                
            </Container>
        </>
    );
}

export default Login;