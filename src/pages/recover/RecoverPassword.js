import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import Image from 'react-bootstrap/Image';
import img from '../../assets/logoLogin.png';

function RecoverPassword() {
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
                        <Form.Group as={Col} controlId="emailRecover">
                            <Form.Control type="email" placeholder="Insira seu e-mail" />
                        </Form.Group>
                    </Row>

                    <Button className="w-100" variant="primary" type="submit">
                        Enviar link
                    </Button>

                    <Form.Group className="mb-3"  id="groupOptions">
                        <Form.Text style={{color:'green'}}>Link para recuperação de senha enviado!</Form.Text>
                    </Form.Group>
                    <br />
                </Form>
                
            </Container>
        </>
    );
}

export default RecoverPassword;