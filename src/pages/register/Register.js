import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Register() {
    const styles = {
        marginsFildes: {
            marginLeft:15, 
            marginRight:15
        },
        colorFieldData: {
            color:'gray'
        }
    };

    return (
        <>
            <NavBarLight />
            <Container className="mt-4 shadow" style={{ borderRadius: 10}}>
                <Form>
                    < br/>
                    <Row className="mb-3" style={styles.marginsFildes}>
                        <Form.Text>Novo cadastro</Form.Text>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="nameUser">
                            <Form.Control type="text" placeholder="Insira seu nome"></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="surnameUser">
                            <Form.Control type="text" placeholder="Insira seu sobrenome" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="birthdayUser">
                            <Form.Control type="date" style={styles.colorFieldData} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="surnameUser">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="surnameUser">
                            <Form.Control type="password" placeholder="Repetir senha" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="btnSave">
                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>
                        </Form.Group>
                    </Row>
                    < br/>
                    < br/>
                </Form>
            </Container>
        </>
    );
}

export default Register;