import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate }from "react-router-dom";
import api from "../../../../services/api";
import Modal from 'react-bootstrap/Modal';
    
function FreeClassEdit() {

    const [cmShow, setCmShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClose = () => setDeleteShow(false);
    const handleShow = () => setDeleteShow(true);    
    const [infoYoutube, setInfoYoutube] = useState("Por favor, insira o link do vídeo!");
    const [infoYoutubeColor, setInfoYoutubeColor] = useState("gray");
    const [infoNameClass, setInfoNameClass] = useState("Por favor, insira um nome para aula!");
    const [infoNameClassColor, setInfoNameClassColor] = useState("gray");
    const [infoDescription, setInfoDescription] = useState("Por favor, insira uma descrição para a aula!");
    const [infoDescriptionColor, setInfoDescriptionColor] = useState("gray");
    const [infoLevel, setInfoLevel] = useState("Por favor, escolha o nível da aula!");
    const [infoLevelColor, setInfoLevelColor] = useState("gray");
    const [infoSubject, setInfoSubject] = useState("Por favor, escolha um assunto!");
    const [infoSubjectColor, setInfoSubjectColor] = useState("gray");

    const style = {
        youtube:{color:infoYoutubeColor, borderColor:infoYoutubeColor},
        name:{color:infoNameClassColor, borderColor:infoNameClassColor},
        description:{color:infoDescriptionColor, borderColor:infoDescriptionColor},
        level:{color:infoLevelColor, borderColor:infoLevelColor},
        subject:{color:infoSubjectColor, borderColor:infoSubjectColor},
    };

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/admin/home/classes/edit/", "");
    
    const navigate = useNavigate();

    const [idControl, setIdControl] = useState('');

    const returnID = () => {
        const date = new Date();
        return ('F'+date.getFullYear()+'R'+date.getMonth()+'E'+date.getDate()+'E'+
                    date.getDay()+'C'+date.getHours()+'L'+date.getMinutes()+'A'+date.getSeconds()+'S'+
                    date.getMilliseconds()+'S');
    };

    useEffect(() => {
        api.get(`/v1/freeclasses/${id}`).then(res => {
            setIdControl(res.data.idControl);
            document.getElementById("linkYoutubeFree").value = res.data.linkYoutube;
            document.getElementById("nameFreeClass").value = res.data.nameClass;
            document.getElementById("descriptionFreeClass").value = res.data.description;
            document.getElementById("levelFreeClass").value = res.data.level;
            document.getElementById("freeClassSubject").value = res.data.subject;
        }).catch(error => {
            return error;
        });
    }, []);

    const updateFreeClass = () => {
        api.put(`/v1/freeclasses/${idControl}`, {
            nameClass: document.getElementById("nameFreeClass").value,
            description: document.getElementById("descriptionFreeClass").value,
            level: document.getElementById("levelFreeClass").value,
            subject: document.getElementById("freeClassSubject").value,
            linkYoutube: document.getElementById("linkYoutubeFree").value
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });
    };

    const deleteClass = () => {
        api.delete(`/v1/freeclasses/${id}`).then(res => {
            setDeleteShow(false);
            navigate('/admin/home/classes');
        }).catch(error => {
            return error;
        });
    };

    const backToStartYoutube = () => {
        setInfoYoutubeColor("gray");
        setInfoYoutube("Por favor, insira o link do vídeo!");
    };

    const backToStartClass = () => {
        setInfoNameClassColor("gray");
        setInfoNameClass("Por favor, insira um nome para aula!");
    };

    const backToStartDescription= () => {
        setInfoDescriptionColor("gray");
        setInfoDescription("Por favor, insira uma descrição para a aula!");
    };

    const backToStartLevel = () => {
        setInfoLevelColor("gray");
        setInfoLevel("Por favor, escolha o nível da aula!");
    };

    const backToStartSubject = () => {
        setInfoSubjectColor("gray");
        setInfoSubject("Por favor, escolha um assunto!");
    };

    const clearForm = () => {
        backToStartYoutube();
        backToStartClass();
        backToStartDescription();
        backToStartLevel();
        backToStartSubject();
    }

    const submitValidate = () => {
        let idClass = document.getElementById("controlIdFreeClass");
        let youtube = document.getElementById("linkYoutubeFree");
        let className = document.getElementById("nameFreeClass");
        let description = document.getElementById("descriptionFreeClass");
        let level = document.getElementById("levelFreeClass");
        let subject = document.getElementById("freeClassSubject");
        
        if (youtube.value === ""){
            setInfoYoutube("Você esqueceu de insirir o link do vídeo!");
            setInfoYoutubeColor("red");
        } else if (className.value === ""){
            setInfoNameClass("Você esqueceu de inserir um nome para aula!");
            setInfoNameClassColor("red");
        } else if (description.value === ""){
            setInfoDescription("Você esqueceu de inserir uma descrição para a aula!");
            setInfoDescriptionColor("red");
        } else if (level.value === "----------"){
            setInfoLevel("Você esqueceu de escolher o nível da aula!");
            setInfoLevelColor("red");
        } else if (subject.value === "----------"){
            setInfoSubject("Você esqueceu de escolher um assunto!");
            setInfoSubjectColor("red");
        } else {
            updateFreeClass();
            clearForm();
            setCmShow(true);
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
                        <p>Aula atualizada com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Modal
                    show={deleteShow}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Você tem certeza que deseja excluir este registro?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => deleteClass()}>Exluir</Button>
                    </Modal.Footer>
                </Modal>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdFreeClass">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Este é o ID de controle da aula!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="linkYoutubeFree">
                        <Form.Control type="text" style={style.youtube} onInput={() => backToStartYoutube()} placeholder="https://www.youtube.com/..."/>
                        <Form.Text style={style.youtube}>
                            {infoYoutube}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nameFreeClass">
                        <Form.Control type="text" onInput={() => backToStartClass()} style={style.name} placeholder="Nome da aula" />
                        <Form.Text style={style.name}>
                            {infoNameClass}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descriptionFreeClass">
                        <Form.Control as="textarea" onInput={() => backToStartDescription()} style={style.description} rows={3} />
                        <Form.Text style={style.description}>
                            {infoDescription}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelFreeClass" onInput={() => backToStartLevel()} style={style.level}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.level}>
                            {infoLevel}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="freeClassSubject" onInput={() => backToStartSubject()} style={style.subject}>
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
                            {infoSubject}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveClass">
                            <Button variant="dark" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                Atualizar
                            </Button>{` `}
                            <Button variant="danger" as={Col} md={2} lg={2} sm={2} onClick={() => handleShow()} type="submit" >
                                Excluir
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default FreeClassEdit;