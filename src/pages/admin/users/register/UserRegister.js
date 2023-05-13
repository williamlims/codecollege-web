import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import api from "../../../../services/api";

function UserRegister() {
    const [cmShow, setCmShow] = useState(false);
    const [infoname, setInfoname] = useState("Por favor, insira o nome de usuário!");
    const [infonameColor, setInfonameColor] = useState("gray");
    const [infosurname, setInfosurname] = useState("Por favor, insira o sobrenome de usuário!");
    const [infosurnameColor, setInfosurnameColor] = useState("gray");
    const [infodate, setInfodate] = useState("Por favor, insira a data de nascimento do usuário!");
    const [infodateColor, setInfodateColor] = useState("gray");
    const [infoemail, setInfoemail] = useState("Por favor, insira o email do usuário!");
    const [infoemailColor, setInfoemailColor] = useState("gray");
    const [infopass, setInfopass] = useState("Por favor, insira uma senha para o usuário!");
    const [infopassColor, setInfopassColor] = useState("gray");
    const [infopass2Color, setInfopass2Color] = useState("gray");
    const [infolevel, setInfolevel] = useState("Por favor, insira o nível de acesso do usuário!");
    const [infolevelColor, setInfolevelColor] = useState("gray");

    const saveUser = () => {
        
        let idControl = document.getElementById("controlId").value;
        let firstName = document.getElementById("name").value;
        let lastName = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let birthday = document.getElementById("date").value;
        let password = document.getElementById("password").value;
        let levelUser = document.getElementById("levelUser").value;
        let googleAccount = false;
        let photo = "nada";

        api.post('/v1/users/', {
            idControl: idControl,
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthday: birthday,
            password: password,
            levelUser: levelUser,
            googleAccount: googleAccount,
            photo: photo
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

    const style = {
        nameColor:{color:infonameColor, borderColor:infonameColor},
        surnameColor:{color:infosurnameColor, borderColor:infosurnameColor},
        dateColor:{color:infodateColor, borderColor:infodateColor},
        emailColor:{color:infoemailColor, borderColor:infoemailColor},
        passColor:{color:infopassColor, borderColor:infopassColor},
        pass2Color:{color:infopass2Color, borderColor:infopass2Color},
        levelColor:{color:infolevelColor, borderColor:infolevelColor},
    };

    const backToStartName = () => {
        setInfonameColor("gray");
        setInfoname("Por favor, insira o nome de usuário!");
    };

    const backToStartSurname = () => {
        setInfosurnameColor("gray");
        setInfosurname("Por favor, insira o sobrenome de usuário!");
    };

    const backToStartDate = () => {
        setInfodateColor("gray");
        setInfodate("Por favor, insira a data de nascimento do usuário");
    };

    const backToStartEmail = () => {
        setInfoemailColor("gray");
        setInfoemail("Por favor, insira o email do usuário!");
    };

    const backToStartPass = () => {
        setInfopassColor("gray");
        setInfopass("Por favor, insira uma senha para o usuário!");
    };

    const backToStartPass2 = () => {
        setInfopassColor("gray");
        setInfopass2Color("gray");
        setInfopass("Por favor, insira uma senha para o usuário!");
    };

    const backToStartLevel = () => {
        setInfolevelColor("gray");
        setInfolevel("Por favor, insira o nível de acesso do usuário!");
    };

    const clearForm = () => {
        backToStartName();
        backToStartSurname();
        backToStartDate();
        backToStartEmail();
        backToStartPass()
        backToStartPass2();
        backToStartLevel();
    }

    const submitValidate = () => {
        let idControl = document.getElementById("controlId");
        let name = document.getElementById("name");
        let surname = document.getElementById("surname");
        let date = document.getElementById("date");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let password2 = document.getElementById("password2");
        let levelUser = document.getElementById("levelUser");
        
        if (name.value === ""){
            setInfoname("Você esqueceu de inserir o nome do usuário!");
            setInfonameColor("red");
        } else if (surname.value === ""){
            setInfosurname("Você esqueceu de inserir o sobrenome do usuário!");
            setInfosurnameColor("red");
        } else if (date.value === ""){
            setInfodate("Você esqueceu de inserir a data de aniversário do usuário!");
            setInfodateColor("red");
        } else if (email.value === ""){
            setInfoemail("Você esqueceu de inserir o email do usuário!");
            setInfoemailColor("red");
        } else if (password.value === ""){
            setInfopass("Você esqueceu de inserir a senha do usuário!");
            setInfopassColor("red");
        } else if (password2.value === ""){
            setInfopass("Você esqueceu de repetir a senha do usuário!");
            setInfopassColor("red");
            setInfopass2Color("red");
        } else if (password.value !== password2.value){
            setInfopass("As senhas não batem!");
            setInfopassColor("red");
            setInfopass2Color("red");
        } else if (levelUser.value === "----------"){
            setInfolevel("Você esqueceu de inserir o nível do usuário!");
            setInfolevelColor("red");
        } else {
            saveUser();
            clearForm();
            setCmShow(true);
            idControl.value = returnID();
            name.value = "";
            surname.value = "";
            date.value = "";
            email.value = "";
            password.value = "";
            password2.value = "";
            levelUser.value = "----------";
        }
        
    };

    return (
        <>
            <Container fluid className='py-1 px-2 shadow-sm'>
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
                        <p>Usuário salvo com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form>
                    <Form.Group className="mb-3 mt-2" controlId="controlId">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            Este é o ID de controle de usuário!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="name">
                        <Form.Control type="text" onInput={() => backToStartName()} style={style.nameColor} placeholder="Nome do usuário" />
                        <Form.Text style={style.nameColor}>
                            {infoname}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="surname">
                        <Form.Control onInput={() => backToStartSurname()} type="text" style={style.surnameColor} placeholder="Sobrenome do usuário" />
                        <Form.Text style={style.surnameColor}>
                            {infosurname}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Control onInput={() => backToStartDate()} type="date" style={style.dateColor} />
                        <Form.Text style={style.dateColor}>
                            {infodate}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control onInput={() => backToStartEmail()} type="email" style={style.emailColor} />
                        <Form.Text style={style.emailColor}>
                            {infoemail}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-3">
                        <InputGroup as={Col}>
                            <Form.Control onInput={() => backToStartPass()} type="password" style={style.passColor} placeholder="Senha" id="password" />
                            <InputGroup.Text id="passOne"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                        <InputGroup as={Col}>
                            <Form.Control onInput={() => backToStartPass2()} type="password" style={style.pass2Color} placeholder="Repetir senha" id="password2" />
                            <InputGroup.Text id="passTwo"><BsFillEyeSlashFill /></InputGroup.Text>
                        </InputGroup>
                        <Form.Text style={style.passColor}>
                            {infopass}
                        </Form.Text>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Select onInput={() => backToStartLevel()} id="levelUser" style={style.levelColor}>
                            <option>----------</option>
                            <option value={1}>usuário</option>
                            <option value={2}>administrador</option>
                        </Form.Select>
                        <Form.Text style={style.levelColor}>
                            {infolevel}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="btnSaveUser">
                            <Button variant="dark" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                Salvar
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default UserRegister;