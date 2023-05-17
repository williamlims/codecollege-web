import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../../../services/api";

function NewRegister() {
    const [cmShow, setCmShow] = useState(false);
    const [infoDocumentName, setInfoDocumentName] = useState("Por favor, insira o nome do documento!");
    const [infoDocumentNameColor, setInfoDocumentNameColor] = useState("gray");
    const [infofileDocument, setInfofileDocument] = useState("Envie o documento referente ao documento (ex: documento.pdf)!");
    const [infofileDocumentColor, setInfofileDocumentColor] = useState("gray");
    const [infolevelDocument, setInfolevelDocument] = useState("Escolha o nível do documento!");
    const [infolevelDocumentColor, setInfolevelDocumentColor] = useState("gray");
    const [infoDocumentSubject, setInfoDocumentSubject] = useState("Escolha o assunto do documento!");
    const [infoDocumentSubjectColor, setInfoDocumentSubjectColor] = useState("gray");
  
    const style = {
        register:{color:infoDocumentNameColor, borderColor:infoDocumentNameColor},
        file:{color:infofileDocumentColor, borderColor:infofileDocumentColor},
        level:{color:infolevelDocumentColor, borderColor:infolevelDocumentColor},
        subject:{color:infoDocumentSubjectColor, borderColor:infoDocumentSubjectColor}, 
    };

    const returnID = () => {
        const date = new Date();
        return ('D'+date.getFullYear()+'O'+date.getMonth()+'C'+date.getDate()+'U'+
                   date.getDay()+'M'+date.getHours()+'E'+date.getMinutes()+'N'+date.getSeconds()+'T'+
                   date.getMilliseconds());
    };
    
    const saveTutorial = () => {

        let formData = new FormData();

        let filedoc = document.getElementById("fileDocument");
        let controlIdRegister = document.getElementById("controlIdRegister").value;
        let registerName = document.getElementById("registerName").value;
        let levelRegister = document.getElementById("levelRegister").value;
        let registerSubject = document.getElementById("registerSubject").value;

        formData.append("idControl", controlIdRegister);
        formData.append("nameDocument", registerName);
        formData.append("level", levelRegister);
        formData.append("subject", registerSubject);
        formData.append("fileDocument", filedoc.files[0]);

        api.post('/v1/libraries/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
           }
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });

    };

    const backToStartDocument = () => {
        setInfoDocumentNameColor("gray");
        setInfoDocumentName("Por favor, insira o nome do documento!");
    };

    const backToStartFile = () => {
        setInfofileDocumentColor("gray");
        setInfofileDocument("Envie o documento referente ao documento (ex: documento.pdf)!");
    };

    const backToStartLevel= () => {
        setInfolevelDocumentColor("gray");
        setInfolevelDocument("Escolha o nível do documento!");
    };

    const backToStartSubject = () => {
        setInfoDocumentSubjectColor("gray");
        setInfoDocumentSubject("Escolha o assunto do documento!");
    };

    const clearForm = () => {
        backToStartDocument();
        backToStartFile();
        backToStartLevel();
        backToStartSubject();
    }

    const submitValidate = () => {
        let controlIdRegister = document.getElementById("controlIdRegister");
        let registerName = document.getElementById("registerName");
        let fileDocument = document.getElementById("fileDocument");
        let levelRegister = document.getElementById("levelRegister");
        let registerSubject = document.getElementById("registerSubject");
        
        if (registerName.value === ""){
            setInfoDocumentName("Você esqueceu de inserir o nome do documento!");
            setInfoDocumentNameColor("red");
        } else if (fileDocument.value === ""){
            setInfofileDocument("Você esqueceu de inserir o arquivo!");
            setInfofileDocumentColor("red");
        } else if (levelRegister.value === "----------"){
            setInfolevelDocument("Você esqueceu de escolher o nível!");
            setInfolevelDocumentColor("red");
        } else if (registerSubject.value === "----------"){
            setInfoDocumentSubject("Você esqueceu de escolher o assunto!");
            setInfoDocumentSubjectColor("red");
        } else {
            saveTutorial();
            clearForm();
            setCmShow(true);
            controlIdRegister.value = returnID();
            registerName.value = "";
            fileDocument.value = "";
            levelRegister.value = "----------";
            registerSubject.value = "----------";
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
                        <p>Documento criado com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form action='' as={Col} xl={8} lg={12} md={12} sm={12} es={12} encType="multipart/form-data">
                    <Form.Group className="mb-3 mt-2" controlId="controlIdRegister">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text>
                            {`Este é o ID de controle deste Documento!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="registerName">
                        <Form.Control type="text" style={style.register} placeholder="Nome do Documento"/>
                        <Form.Text style={style.register}>
                            {infoDocumentName}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" name="fileDocument" controlId="fileDocument">
                        <Form.Control type="file" name="fileDocument" placeholder="Envie o arquivo"/>
                        <Form.Text style={style.level}>
                            {infofileDocument}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelRegister" style={style.level}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {infolevelDocument}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="registerSubject" style={style.subject}>
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
                            {infoDocumentSubject}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveRegister">
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

export default NewRegister;