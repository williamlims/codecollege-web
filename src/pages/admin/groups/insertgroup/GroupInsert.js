import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import api from "../../../../services/api";


function GroupInsert() {

    const [cmShow, setCmShow] = useState(false);
    const [infoOption, setInfoOption] = useState("Por favor, escolha a opção a ser inserida no grupo!");
    const [infoOptionColor, setInfoOptionColor] = useState("gray");
    const [infoIDItem, setInfoIDItem] = useState("Por favor, insira aqui o ID do item escolhido!");
    const [infoIDItemColor, setInfoIDItemColor] = useState("gray");
    const [infoIDGroup, setInfoIDGroup] = useState("Por favor, insira aqui o ID do GRUPO!");
    const [infoIDGroupColor, setInfoIDGroupColor] = useState("gray");

    const style = {
        option:{color:infoOptionColor, borderColor:infoOptionColor},
        item:{color:infoIDItemColor, borderColor:infoIDItemColor},
        group:{color:infoIDGroupColor, borderColor:infoIDGroupColor},
    };

    const saveInGroup = () => {
        if(document.getElementById("option").value === '1') {
            api.post('/v1/groups/users/', {
                idControlUser: document.getElementById("idItem").value,
                idControlGroup: document.getElementById("idGroup").value
            }).then(res => {
                return res.status;
            }).catch(error => {
                return error;
            });
        } else if(document.getElementById("option").value === '2') {
            api.post('/v1/groups/courses/', {
                idControlCourse: document.getElementById("idItem").value,
                idControlGroup: document.getElementById("idGroup").value
            }).then(res => {
                return res.status;
            }).catch(error => {
                return error;
            });
        } else if(document.getElementById("option").value === '3') {
            api.post('/v1/groups/tutorials/', {
                idControlTutorial: document.getElementById("idItem").value,
                idControlGroup: document.getElementById("idGroup").value
            }).then(res => {
                return res.status;
            }).catch(error => {
                return error;
            });
        } else if(document.getElementById("option").value === '4') {
            api.post('/v1/groups/classes/', {
                idControlClass: document.getElementById("idItem").value,
                idControlGroup: document.getElementById("idGroup").value
            }).then(res => {
                return res.status;
            }).catch(error => {
                return error;
            });
        } else if(document.getElementById("option").value === '5') {
            api.post('/v1/groups/libraries/', {
                idControlLibrary: document.getElementById("idItem").value,
                idControlGroup: document.getElementById("idGroup").value
            }).then(res => {
                return res.status;
            }).catch(error => {
                return error;
            });
        } else {
            console.log("Erro ao salvar"); 
        }
    };

    const backToStartOption = () => {
        setInfoOptionColor("gray");
        setInfoOption("Por favor, escolha a opção a ser inserida no grupo!");
    };

    const backToStartItem = () => {
        setInfoIDItemColor("gray");
        setInfoIDItem("Por favor, insira aqui o ID do item escolhido!");
    };

    const backToStartGroup = () => {
        setInfoIDGroupColor("gray");
        setInfoIDGroup("Por favor, insira aqui o ID do GRUPO!");
    };

    const clearForm = () => {
        backToStartOption();
        backToStartItem();
        backToStartGroup();
    }

    const submitValidate = () => {
        let option = document.getElementById("option");
        let idItem = document.getElementById("idItem");
        let idGroup = document.getElementById("idGroup");
        
        if (option.value === "----------"){
            setInfoOption("Você esqueceu de escolher o Item!");
            setInfoOptionColor("red");
        } else if (idItem.value === ""){
            setInfoIDItem("Você esqueceu de inserir o ID do Item!");
            setInfoIDItemColor("red");
        } else if (idGroup.value === ""){
            setInfoIDGroup("Você esqueceu de inserir o ID do Grupo!");
            setInfoIDGroupColor("red");
        } else {
            saveInGroup()
            clearForm();
            setCmShow(true);
            option.value = "----------";
            idItem.value = "";
            idGroup.value = "";
        }    
    };

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
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
                        <p>Inserido com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3">
                        <Form.Select id="option" onInput={() => backToStartOption()} style={style.option}>
                            <option>----------</option>
                            <option value={'1'}>Usuário</option>
                            <option value={'2'}>Curso</option>
                            <option value={'3'}>Tutorial</option>
                            <option value={'4'}>Aula Livre</option>
                            <option value={'5'}>Biblioteca</option>
                        </Form.Select>
                        <Form.Text style={style.option}>
                            {infoOption}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="idItem">
                        <Form.Control type="text" onInput={() => backToStartItem()} style={style.item} placeholder="Ex: I2023T4E9M2I19D30C38H109O" />
                        <Form.Text style={style.item}>
                            {infoIDItem}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="idGroup">
                        <Form.Control type="text" onInput={() => backToStartGroup()} style={style.group} placeholder="Ex: G2023R4O9U2P19I30D38C109T" />
                        <Form.Text style={style.group}>
                            {infoIDGroup}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveGrpItm">
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

export default GroupInsert;