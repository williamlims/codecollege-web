import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../../../services/api";

function NewTutorial() {
    const [cmShow, setCmShow] = useState(false);
    const [infotutorialName, setInfotutorialName] = useState("Por favor, insira o nome do tutorial!");
    const [infotutorialNameColor, setInfotutorialNameColor] = useState("gray");
    const [infofileDocument, setInfofileDocument] = useState("Envie o documento referente ao tutorial (ex: tutorial.pdf)!");
    const [infofileDocumentColor, setInfofileDocumentColor] = useState("gray");
    const [infolevelTutorial, setInfolevelTutorial] = useState("Escolha o nível do tutorial!");
    const [infolevelTutorialColor, setInfolevelTutorialColor] = useState("gray");
    const [infotutotialSubject, setInfotutotialSubject] = useState("Escolha o assunto do tutorial!");
    const [infotutotialSubjectColor, setInfotutotialSubjectColor] = useState("gray");
  
    const style = {
        tutorial:{color:infotutorialNameColor, borderColor:infotutorialNameColor},
        file:{color:infofileDocumentColor, borderColor:infofileDocumentColor},
        level:{color:infolevelTutorialColor, borderColor:infolevelTutorialColor},
        subject:{color:infotutotialSubjectColor, borderColor:infotutotialSubjectColor}, 
    };

    const returnID = () => {
        const date = new Date();
        return ('T'+date.getFullYear()+'U'+date.getMonth()+'T'+date.getDate()+'O'+
                   date.getDay()+'R'+date.getHours()+'I'+date.getMinutes()+'A'+date.getSeconds()+'L'+
                   date.getMilliseconds());
    };

    const saveTutorial = () => {

        let formData = new FormData();

        let filedoc = document.getElementById("fileDocument");
        let controlIdTutorial = document.getElementById("controlIdTutorial").value;
        let tutorialName = document.getElementById("tutorialName").value;
        let levelTutorial = document.getElementById("levelTutorial").value;
        let tutotialSubject = document.getElementById("tutotialSubject").value;

        formData.append("idControl", controlIdTutorial);
        formData.append("nameTutorial", tutorialName);
        formData.append("level", levelTutorial);
        formData.append("subject", tutotialSubject);
        formData.append("fileDocument", filedoc.files[0]);

        api.post('/v1/tutorials/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
           }
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });

    };

    const backToStartTutorial = () => {
        setInfotutorialNameColor("gray");
        setInfotutorialName("Por favor, insira o nome do tutorial!");
    };

    const backToStartFile = () => {
        setInfofileDocumentColor("gray");
        setInfofileDocument("Envie o documento referente ao tutorial (ex: tutorial.pdf)!");
    };

    const backToStartLevel= () => {
        setInfolevelTutorialColor("gray");
        setInfolevelTutorial("Escolha o nível do tutorial!");
    };

    const backToStartSubject = () => {
        setInfotutotialSubjectColor("gray");
        setInfotutotialSubject("Escolha o assunto do tutorial!");
    };

    const clearForm = () => {
        backToStartTutorial();
        backToStartFile();
        backToStartLevel();
        backToStartSubject();
    }

    const submitValidate = () => {
        let controlIdTutorial = document.getElementById("controlIdTutorial");
        let tutorialName = document.getElementById("tutorialName");
        let fileDocument = document.getElementById("fileDocument");
        let levelTutorial = document.getElementById("levelTutorial");
        let tutotialSubject = document.getElementById("tutotialSubject");
        
        if (tutorialName.value === ""){
            setInfotutorialName("Você esqueceu de inserir o nome do tutorial!");
            setInfotutorialNameColor("red");
        } else if (fileDocument.value === ""){
            setInfofileDocument("Você esqueceu de inserir o arquivo!");
            setInfofileDocumentColor("red");
        } else if (levelTutorial.value === "----------"){
            setInfolevelTutorial("Você esqueceu de escolher o nível!");
            setInfolevelTutorialColor("red");
        } else if (tutotialSubject.value === "----------"){
            setInfotutotialSubject("Você esqueceu de escolher o assunto!");
            setInfotutotialSubjectColor("red");
        } else {
            saveTutorial();
            clearForm();
            setCmShow(true);
            controlIdTutorial.value = returnID();
            tutorialName.value = "";
            fileDocument.value = "";
            levelTutorial.value = "----------";
            tutotialSubject.value = "----------";
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
                        <p>Tutorial criado com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form action='' as={Col} xl={8} lg={12} md={12} sm={12} es={12} encType="multipart/form-data">
                    <Form.Group className="mb-3 mt-2" controlId="controlIdTutorial">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text>
                            {`Este é o ID de controle deste tutorial!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="tutorialName">
                        <Form.Control type="text" style={style.tutorial} placeholder="Nome do tutorial"/>
                        <Form.Text style={style.tutorial}>
                            {infotutorialName}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" name="fileDocument" controlId="fileDocument">
                        <Form.Control type="file" name="fileDocument" placeholder="Envie o arquivo"/>
                        <Form.Text style={style.level}>
                            {infofileDocument}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelTutorial" style={style.level}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {infolevelTutorial}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="tutotialSubject" style={style.subject}>
                            <option>----------</option>
                            <option value={1}>Tecnologia</option>
                            <option value={2}>Administração</option>
                            <option value={3}>Contabilidade</option>
                            <option value={4}>Finanças</option>
                            <option value={5}>Indústria</option>
                            <option value={6}>Medicina</option>
                            <option value={7}>Comunicação</option>
                            <option value={8}>Outro</option>
                        </Form.Select>
                        <Form.Text style={style.subject}>
                            {infotutotialSubject}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveTutorial">
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

export default NewTutorial;