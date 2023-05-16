import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate }from "react-router-dom";
import api from "../../../../services/api";

function CourseEdit() {

    const [cmShow, setCmShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClose = () => setDeleteShow(false);
    const handleShow = () => setDeleteShow(true);    
    const [infonameCourse, setInfonameCourse] = useState("Por favor, insira o nome do curso!");
    const [infonameCourseColor, setInfonameCourseColor] = useState("gray");
    const [infodescriptionCourse, setInfodescriptionCourse] = useState("Por favor, insira uma descrição para o curso!");
    const [infodescriptionCourseColor, setInfodescriptionCourseColor] = useState("gray");
    const [infolevelCourse, setInfolevelCourse] = useState("Por favor, escolha o nível do curso!");
    const [infolevelCourseColor, setInfolevelCourseColor] = useState("gray");
    const [infoareaCourse, setInfoareaCourse] = useState("Por favor, escolha a área do curso!");
    const [infoareaCourseColor, setInfoareaCourseColor] = useState("gray");
    
    const style = {
        nameCourseColor:{color:infonameCourseColor, borderColor:infonameCourseColor},
        descriptionCourseColor:{color:infodescriptionCourseColor, borderColor:infodescriptionCourseColor},
        levelCourseColor:{color:infolevelCourseColor, borderColor:infolevelCourseColor},
        areaCourseColor:{color:infoareaCourseColor, borderColor:infoareaCourseColor},
    };

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/admin/home/courses/edit/", "");
    
    const navigate = useNavigate();

    const [idControl, setIdControl] = useState('');
    
    useEffect(() => {
        api.get(`/v1/courses/${id}`).then(res => {
            setIdControl(res.data.idControl);
            document.getElementById("nameCourse").value = res.data.nameCourse;
            document.getElementById("descriptionCourse").value = res.data.description;
            document.getElementById("levelCourse").value = res.data.level;
            document.getElementById("areaCourse").value = res.data.area;
        }).catch(error => {
            return error;
        });
    }, []);

    const updateCourse = () => {
        api.put(`/v1/courses/${idControl}`, {
            nameCourse: document.getElementById("nameCourse").value,
            description: document.getElementById("descriptionCourse").value,
            level: document.getElementById("levelCourse").value,
            area: document.getElementById("areaCourse").value
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });
    };

    const deleteCourse = () => {
        api.delete(`/v1/courses/${id}`).then(res => {
            setDeleteShow(false);
            navigate('/admin/home/courses');
        }).catch(error => {
            return error;
        });
    };

    const returnID = () => {
        const date = new Date();
        return ('C'+date.getFullYear()+'O'+date.getMonth()+'U'+date.getDate()+'R'+
                   date.getDay()+'S'+date.getHours()+'E'+date.getMinutes()+'I'+date.getSeconds()+'D'+
                   date.getMilliseconds());
    };

    const backToStartNameCourse = () => {
        setInfonameCourseColor("gray");
        setInfonameCourse("Por favor, insira o nome do curso!");
    };

    const backToStartDescriptionCourse = () => {
        setInfodescriptionCourseColor("gray");
        setInfodescriptionCourse("Por favor, insira uma descrição para o curso!");
    };

    const backToStartLevelCourse = () => {
        setInfolevelCourseColor("gray");
        setInfolevelCourse("Por favor, escolha o nível do curso!");
    };

    const backToStartAreaCourse = () => {
        setInfoareaCourseColor("gray");
        setInfoareaCourse("Por favor, escolha a área do curso!");
    };

    const clearForm = () => {
        backToStartNameCourse();
        backToStartDescriptionCourse();
        backToStartLevelCourse();
        backToStartAreaCourse();
    }

    const submitValidate = () => {
        let idControl = document.getElementById("controlId");
        let nameCourse = document.getElementById("nameCourse");
        let descriptionCourse = document.getElementById("descriptionCourse");
        let levelCourse = document.getElementById("levelCourse");
        let areaCourse = document.getElementById("areaCourse");
        
        if (nameCourse.value === ""){
            setInfonameCourse("Você esqueceu de inserir o nome do curso!");
            setInfonameCourseColor("red");
        } else if (descriptionCourse.value === ""){
            setInfodescriptionCourse("Você esqueceu de inserir uma descrição para o curso!");
            setInfodescriptionCourseColor("red");
        } else if (levelCourse.value === "----------"){
            setInfolevelCourse("Você esqueceu de escolher o nível do curso!");
            setInfolevelCourseColor("red");
        } else if (areaCourse.value === "----------"){
            setInfoareaCourse("Você esqueceu de escolher a área do curso!");
            setInfoareaCourseColor("red");
        } else {
            updateCourse();
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
                        <p>Dados atualizados com sucesso!</p>
                        <Button variant="dark" onClick={() => setCmShow(false)} className='mt-2 m-3'>OK</Button>
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
                    <Button variant="danger" onClick={() => deleteCourse()}>Exluir</Button>
                    </Modal.Footer>
                </Modal>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3 mt-2" controlId="controlId">
                        <Form.Control type="text" disabled value={idControl}/>
                        <Form.Text style={style.conrtolIDColor}>
                            Este é o ID de controle do curso!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nameCourse">
                        <Form.Control type="text" onInput={() => backToStartNameCourse()} style={style.nameCourseColor} placeholder="Nome do curso" />
                        <Form.Text style={style.nameCourseColor}>
                            {infonameCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descriptionCourse">
                        <Form.Control as="textarea" onInput={() => backToStartDescriptionCourse()} style={style.descriptionCourseColor} rows={3} />
                        <Form.Text style={style.descriptionCourseColor}>
                            {infodescriptionCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelCourse" onInput={() => backToStartLevelCourse()} style={style.levelCourseColor}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {infolevelCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="areaCourse" onInput={() => backToStartAreaCourse()} style={style.areaCourseColor}>
                            <option>----------</option>
                            <option value={1}>Ciências Exatas e da Terra</option>
                            <option value={2}>Ciências Biológicas</option>
                            <option value={3}>Engenharias</option>
                            <option value={4}>Ciências da Saúde</option>
                            <option value={5}>Ciências Agrárias</option>
                            <option value={6}>Linguística, Letras e Artes</option>
                            <option value={7}>Ciências Sociais Aplicadas</option>
                            <option value={8}>Ciências Humanas</option>
                        </Form.Select>
                        <Form.Text style={style.areaCourseColor}>
                            {infoareaCourse}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveCourse">
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

export default CourseEdit;