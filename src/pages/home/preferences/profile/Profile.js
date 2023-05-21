import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../../components/tab/TabInfo';
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonFill, BsFillEyeSlashFill, BsEnvelopeAtFill } from "react-icons/bs";
import api from "../../../../services/api";

function Profile() {
    const [cmShow, setCmShow] = useState(false);
    const [message, setMessage] = useState("");

    const userIDteste = 'U2023S4E18R4I20D9C22T958'; // pegar essa informação da sessão

    useEffect(() => {
        api.get(`/v1/users/${userIDteste}`).then(res => {
            document.getElementById("firstName").value = res.data.firstName;
            document.getElementById("lastName").value = res.data.lastName;
            document.getElementById("birthday").value = res.data.birthday.substring(0, 10);
            document.getElementById("email").value = res.data.email;
            document.getElementById("pass1").value = res.data.password;
            document.getElementById("pass2").value = res.data.password;
        }).catch(error => {
            alert(error);
        });
    }, [userIDteste]);

    const updateUser = () => {
        api.put(`/v1/users/${userIDteste}`, {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            birthday: document.getElementById("birthday").value,
            password: document.getElementById("pass1").value
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });
    };

    const modalMessage = (message) => {
        setMessage(message);
    }

    const submitValidate = () => {
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let birthday = document.getElementById("birthday");
        let email = document.getElementById("email");
        let pass1 = document.getElementById("pass1");
        let pass2 = document.getElementById("pass2");
        
        if (firstName.value === ""){
            modalMessage("Nome não pode estar vazio!");
            setCmShow(true);
        } else if (lastName.value === ""){
            modalMessage("Sobrenome não pode estar vazio!");
            setCmShow(true);
        } else if (birthday.value === ""){
            modalMessage("Sobrenome não pode estar vazio!");
            setCmShow(true);
        } else if (email.value === ""){
            modalMessage("Email não pode estar vazio!");
            setCmShow(true);
        } else if (pass1.value === ""){
            modalMessage("Senha não pode estar vazio!");
            setCmShow(true);
        } else if (pass2.value === ""){
            modalMessage("Campo de confirmação de senha não pode estar vazio!");
            setCmShow(true);
        } else if (pass1.value !== pass2.value){
            modalMessage("As senhas não batem!");
            setCmShow(true);
        } else {
            updateUser();
            modalMessage("Atualização efetuada com sucesso!");
            setCmShow(true);
        }     
    };

    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/preferences" key="/home/preferences" href="/home/preferences">Preferências</Breadcrumb.Item>
                <Breadcrumb.Item active>Perfil</Breadcrumb.Item>
            </>
        )
    }
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
            <NavMain messageUser="Mantenha o seu perfil atualizado."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Perfil"/>
            <main class="flex-shrink-0">
                <Modal
                    size="sm"
                    show={cmShow}
                    onHide={() => setCmShow(false)}
                    aria-labelledby="confirmation"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="confirmation">
                        Confirmação
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex flex-column justify-content-center'>
                        <p>{message}</p>
                        <Button variant="dark" onClick={() => setCmShow(false)} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Container className='mb-5 mt-2 bg-light shadow'>
                    <Form>
                        < br/>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Text style={styles.textTop}>Alterar cadastro</Form.Text>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col}>
                                <Form.Control type="text" id="firstName" placeholder="Insira seu nome"/>                         
                                <InputGroup.Text id="nameOne"><BsFillPersonFill /></InputGroup.Text>        
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col}>
                                <Form.Control type="text" id="lastName" placeholder="Insira seu sobrenome" />
                                <InputGroup.Text id="bnameTwo"><BsFillPersonFill /></InputGroup.Text> 
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col}>
                                <Form.Control type="date" id="birthday" style={styles.colorFieldData} />
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col}>
                                <Form.Control type="email" id="email" style={styles.colorFieldData} />
                                <InputGroup.Text id="bnameTwo"><BsEnvelopeAtFill /></InputGroup.Text> 
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Text style={styles.textTop}>Alterar senha</Form.Text>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col}>
                                <Form.Control type="password" id="pass1" placeholder="Senha" />
                                <InputGroup.Text id="passOne"><BsFillEyeSlashFill /></InputGroup.Text>
                            </InputGroup>
                            <InputGroup as={Col}>
                                <Form.Control type="password" id="pass2" placeholder="Repetir senha" />
                                <InputGroup.Text id="passTwo"><BsFillEyeSlashFill /></InputGroup.Text>
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Group as={Col} controlId="btnUpdate">
                                <Button variant="primary" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                    Atualizar
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                    <br />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Profile;