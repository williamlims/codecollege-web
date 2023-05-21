import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import img from '../../assets/logoLogin.png';
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Admin() {
    let navigate = useNavigate();
    const [cmShow, setCmShow] = useState(false);
    const [message, setMessage] = useState('');

    const loginAdmin = () => {
        sessionStorage.clear();
        const email = document.getElementById("emailLogin").value;
        const pass = document.getElementById("passwordLogin").value;
        api.get(`/v1/auth/user/${email}/${pass}`).then(res => {
            if(res.data.message === 'Email ou Senha não batem!'){
                setMessage('Email ou Senha não batem!');
                setCmShow(true);
            } else {
                if(res.data.levelUser === 2) {
                    sessionStorage.setItem("idUser", res.data.idControl);
                    sessionStorage.setItem("firstName", res.data.firstName);
                    sessionStorage.setItem("lastName", res.data.lastName);
                    sessionStorage.setItem("levelUser", res.data.levelUser);
                    navigate('/admin/home');
                } else {
                    setMessage('Usuário não autorizado!');
                    setCmShow(true);
                }
            }
        }).catch(error => {
            alert(error);
        });
    };

    return (
        <>
            <NavBarLight />
            <Container className="mt-5 shadow" style={{ maxWidth: '360px', borderRadius: 10}}>
                <Modal
                    size="sm"
                    show={cmShow}
                    onHide={() => setCmShow(false)}
                    aria-labelledby="confirmation"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="confirmation">
                        Informativo
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex flex-column justify-content-center'>
                        <p>{message}</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
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

                    <Button className="w-100 mb-5" variant="dark" onClick={() => loginAdmin()}>
                        Entrar
                    </Button>

                </Form>
            </Container>
        </>
    );
}

export default Admin;