import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import img from '../../assets/logoLogin.png';

function Admin() {
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
                        <Form.Group as={Col} controlId="textAccess">
                            <div style={{fontFamily: 'Arial black', fontSize: 16, color: '#454545'}}>Acesso Administrativo</div>
                        </Form.Group>
                    </Row>

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

                    <Button className="w-100 mb-5" variant="dark" type="submit">
                        Entrar
                    </Button>

                </Form>
            </Container>
        </>
    );
}

export default Admin;