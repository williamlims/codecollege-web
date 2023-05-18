import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import api from "../../../../services/api";

function NewGroup() {

    const [cmShow, setCmShow] = useState(false);
    const [infoGroup, setInfoGroup] = useState("Por favor, insira o nome do grupo!");
    const [infoGroupColor, setInfoGroupColor] = useState("gray");
    const [infoSubject, setInfoSubject] = useState("Por favor, escolha o assunto do grupo!");
    const [infoSubjectColor, setInfoSubjectColor] = useState("gray");
    const [infoDescription, setInfoDescription] = useState("Por favor, insira uma descrição para o grupo!");
    const [infoDescriptionColor, setInfoDescriptionColor] = useState("gray");

    const style = {
        group:{color:infoGroupColor, borderColor:infoGroupColor},
        subject:{color:infoSubjectColor, borderColor:infoSubjectColor},
        description:{color:infoDescriptionColor, borderColor:infoDescriptionColor},
    };

    const returnID = () => {
        const date = new Date();
        return ('G'+date.getFullYear()+'R'+date.getMonth()+'O'+date.getDate()+'U'+
                   date.getDay()+'P'+date.getHours()+'I'+date.getMinutes()+'D'+date.getSeconds()+'C'+
                   date.getMilliseconds()+'T');
    };

    const saveGroup = () => {

        let controlIdGroup = document.getElementById("controlIdGroup");
        let nameGroup = document.getElementById("nameGroup");
        let subjectGroup = document.getElementById("subjectGroup");
        let descriptionGroup = document.getElementById("descriptionGroup");

        api.post('/v1/groups/', {
            idControl: controlIdGroup.value,
            groupName: nameGroup.value,
            subject: subjectGroup.value,
            description: descriptionGroup.value
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });

    };

    const backToStartGroup = () => {
        setInfoGroupColor("gray");
        setInfoGroup("Por favor, insira o nome do grupo!");
    };

    const backToStartSubject = () => {
        setInfoSubjectColor("gray");
        setInfoSubject("Por favor, escolha o assunto do grupo!");
    };

    const backToStartDescription = () => {
        setInfoDescriptionColor("gray");
        setInfoDescription("Por favor, insira uma descrição para o grupo!");
    };

    const clearForm = () => {
        backToStartGroup();
        backToStartSubject();
        backToStartDescription();
    }

    const submitValidate = () => {
        let controlIdGroup = document.getElementById("controlIdGroup");
        let nameGroup = document.getElementById("nameGroup");
        let subjectGroup = document.getElementById("subjectGroup");
        let descriptionGroup = document.getElementById("descriptionGroup");
        
        if (nameGroup.value === ""){
            setInfoGroup("Você esqueceu de inserir o nome do grupo!");
            setInfoGroupColor("red");
        } else if (subjectGroup.value === "----------"){
            setInfoSubject("Você esqueceu de inserir um assunto para o grupo!");
            setInfoSubjectColor("red");
        } else if (descriptionGroup.value === ""){
            setInfoDescription("Você esqueceu de inserir um assunto para o grupo!");
            setInfoDescriptionColor("red");
        } else {
            saveGroup();
            clearForm();
            setCmShow(true);
            controlIdGroup.value = returnID();
            nameGroup.value = "";
            subjectGroup.value = "----------";
            descriptionGroup.value = "";
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
                        <p>Grupo criado com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdGroup">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Este é o ID de controle do Grupo!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nameGroup">
                        <Form.Control type="text" onInput={() => backToStartGroup()} style={style.group} placeholder="Nome do grupo" />
                        <Form.Text style={style.group}>
                            {infoGroup}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="subjectGroup" onInput={() => backToStartSubject()} style={style.subject}>
                            <option>----------</option>
                            <option value={`Trabalho`}>Trabalho</option>
                            <option value={`Estudo`}>Estudo</option>
                            <option value={`Outro`}>Outro</option>
                        </Form.Select>
                        <Form.Text style={style.subject}>
                            {infoSubject}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" onInput={() => backToStartDescription()} controlId="descriptionGroup">
                        <Form.Control as="textarea" style={style.description} rows={3} />
                        <Form.Text style={style.description}>
                            {infoDescription}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveGroup">
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

export default NewGroup;