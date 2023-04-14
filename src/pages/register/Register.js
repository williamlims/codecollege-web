import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import InputGroup from 'react-bootstrap/InputGroup'
import { BsFillPersonFill, BsFillEyeSlashFill } from "react-icons/bs";

function Register() {
    const styles = {
        marginsFildes: {
            marginLeft:15, 
            marginRight:15
        },
        colorFieldData: {
            color:'gray'
        },
        textTop: {
            fontFamily:'Arial',
            fontSize: 20,
            color: 'black'
        }
    };

    return (
        <>
            <NavBarLight />
            <Container className="mt-4 shadow" style={{ borderRadius: 10}}>
                <Form>
                    < br/>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Text style={styles.textTop}>Novo Cadastro</Form.Text>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col} controlId="nameUser">
                            <Form.Control type="text" placeholder="Insira seu nome"/>                         
                            <InputGroup.Text id="nameOne"><BsFillPersonFill /></InputGroup.Text>        
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col} controlId="surnameUser">
                            <Form.Control type="text" placeholder="Insira seu sobrenome" />
                            <InputGroup.Text id="bnameTwo"><BsFillPersonFill /></InputGroup.Text> 
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col} controlId="birthdayUser">
                            <Form.Control type="date" style={styles.colorFieldData} />
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col} controlId="surnameUser">
                            <Form.Control type="password" placeholder="Senha" />
                            <InputGroup.Text id="passOne"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                        <InputGroup as={Col} controlId="surnameUser">
                            <Form.Control type="password" placeholder="Repetir senha" />
                            <InputGroup.Text id="passTwo"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="btnSave">
                            <Button variant="primary" as={Col} md lg sm={2} type="submit" >
                                Salvar
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