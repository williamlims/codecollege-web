import React, { useState } from 'react';
import env from "react-dotenv";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillEyeSlashFill, BsEnvelopeAtFill } from "react-icons/bs";
import api from "../../services/api";

function Register() {
    let navigate = useNavigate();
    const [cmShow, setCmShow] = useState(false);

    const [infoname, setInfoname] = useState("Insira seu nome");
    const [infonameColor, setInfonameColor] = useState("gray");
    const [infosurname, setInfosurname] = useState("Insira seu sobrenome");
    const [infosurnameColor, setInfosurnameColor] = useState("gray");
    const [infodateColor, setInfodateColor] = useState("gray");
    const [infoemail, setInfoemail] = useState("Insira seu email");
    const [infoemailColor, setInfoemailColor] = useState("gray");
    const [infopass, setInfopass] = useState("Inserir senha");
    const [infopassColor, setInfopassColor] = useState("gray");
    const [infopassR, setInfopassR] = useState("Repetir senha");
    const [infopassRColor, setInfopassRColor] = useState("gray");

    const styles = {
        marginsFildes: { marginLeft:15, marginRight:15 },
        colorFieldData: { color:'gray' },
        textTop: { fontFamily:'Arial', fontSize: 20, color: 'black' },
        nameColor:{color:infonameColor, borderColor:infonameColor},
        surnameColor:{color:infosurnameColor, borderColor:infosurnameColor},
        dateColor:{color:infodateColor, borderColor:infodateColor},
        emailColor:{color:infoemailColor, borderColor:infoemailColor},
        passColor:{color:infopassColor, borderColor:infopassColor},
        passRColor:{color:infopassRColor, borderColor:infopassRColor},
    };

    const saveUser = () => {
        api.post('/v1/users/', {
            idControl: returnID(),
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            birthday: document.getElementById("birthdayUser").value,
            password: document.getElementById("passwordIn").value,
            levelUser: 1,
            googleAccount: false,
            photo: env.API_URL + "/public/photos/default.png"
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });
    };

    const returnID = () => {
        const date = new Date();
        return ('U'+date.getFullYear()+'S'+date.getMonth()+'E'+date.getDate()+'R'+
                   date.getDay()+'I'+date.getHours()+'D'+date.getMinutes()+'C'+date.getSeconds()+'T'+
                   date.getMilliseconds());
    };

    const backToStartName = () => {
        setInfonameColor("gray");
        setInfoname("Insira seu nome");
    };

    const backToStartSurname = () => {
        setInfosurnameColor("gray");
        setInfosurname("Insira seu sobrenome");
    };

    const backToStartDate = () => {
        setInfodateColor("gray");
    };

    const backToStartEmail = () => {
        setInfoemailColor("gray");
        setInfoemail("Insira seu email");
    };

    const backToStartPass = () => {
        setInfopassColor("gray");
        setInfopass("Inserir senha");
    };

    const backToStartPassR = () => {
        setInfopassRColor("gray");
        setInfopassR("Repetir senha");
    };

    const clearForm = () => {
        backToStartName();
        backToStartSurname();
        backToStartDate();
        backToStartEmail();
        backToStartPass()
        backToStartPassR();
    }

    const submitValidate = () => {
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let birthdayUser = document.getElementById("birthdayUser");
        let email = document.getElementById("email");
        let passwordIn = document.getElementById("passwordIn");
        let passwordInn = document.getElementById("passwordInn");
        
        if (firstName.value === ""){
            setInfoname("Você esqueceu de inserir seu nome!");
            setInfonameColor("red");
        } else if (lastName.value === ""){
            setInfosurname("Você esqueceu de inserir seu sobrenome!");
            setInfosurnameColor("red");
        } else if (birthdayUser.value === ""){
            setInfodateColor("red");
        } else if (email.value === ""){
            setInfoemail("Esqueceu o email");
            setInfoemailColor("red");
        } else if (passwordIn.value === ""){
            setInfopassColor("red");
        } else if (passwordInn.value === ""){
            setInfopassColor("red");
            setInfopassRColor("red");
        } else if (passwordIn.value !== passwordInn.value){
            setInfopassColor("red");
            setInfopassRColor("red");
        } else {
            saveUser();
            clearForm();
            setCmShow(true);
            firstName.value = "";
            lastName.value = "";
            birthdayUser.value = "";
            email.value = "";
            passwordIn.value = "";
            passwordInn.value = "";
        }
        
    };

    return (
        <>
            <NavBarLight />
            <Container className="mt-4 shadow bg-white" style={{ borderRadius: 10}}>
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
                        <p>Cadastro concluído sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false);navigate('/login');}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form>
                    < br/>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Text style={styles.textTop}>Novo Cadastro</Form.Text>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col}>
                            <Form.Control type="text" id="firstName" onInput={() => backToStartName()} style={styles.nameColor} placeholder={infoname}/>                         
                            <InputGroup.Text id="nameOne"><BsFillPersonFill /></InputGroup.Text>        
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col}>
                            <Form.Control type="text" id="lastName" onInput={() => backToStartSurname()} placeholder={infosurname}  style={styles.surnameColor}  />
                            <InputGroup.Text id="bnameTwo"><BsFillPersonFill /></InputGroup.Text> 
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col}>
                            <Form.Control type="date" onInput={() => backToStartDate()} id="birthdayUser" style={styles.dateColor} />
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col}>
                            <Form.Control type="email" id="email" onInput={() => backToStartEmail()} placeholder={infoemail}  style={styles.emailColor} />
                            <InputGroup.Text id="mail"><BsEnvelopeAtFill /></InputGroup.Text>
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <InputGroup as={Col}>
                            <Form.Control type="password" id="passwordIn" onInput={() => backToStartPass()} placeholder={infopass}  style={styles.passColor}  />
                            <InputGroup.Text id="passOne"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                        <InputGroup as={Col}>
                            <Form.Control type="password" id="passwordInn" onInput={() => backToStartPassR()} placeholder={infopassR}  style={styles.passRColor}  />
                            <InputGroup.Text id="passTwo"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                    </Row>

                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Form.Group as={Col} controlId="btnSave">
                            <Button variant="primary" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()}  type="submit" >
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