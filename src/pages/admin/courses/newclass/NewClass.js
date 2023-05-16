import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import api from "../../../../services/api";
import Modal from 'react-bootstrap/Modal';

function NewClass() {
    const [cmShow, setCmShow] = useState(false);
    const [infoIdCourse, setInfoIdCourse] = useState("Insira aqui o ID de controle do curso!");
    const [infoIdCourseColor, setInfoIdCourseColor] = useState("gray");
    const [infoYoutube, setInfoYoutube] = useState("Insira aqui o link do vídeo!");
    const [infoYoutubeColor, setInfoYoutubeColor] = useState("gray");
    const [infoNameClass, setInfoNameClass] = useState("Por favor, insira o título da aula!");
    const [infoNameClassColor, setInfoNameClassColor] = useState("gray");
    const [infoDescriptionClass, setInfoDescriptionClass] = useState("Por favor, insira uma descrição para a aula!");
    const [infoDescriptionClassColor, setInfoDescriptionClassColor] = useState("gray");
    const [infoModuleClass, setInfoModuleClass] = useState("Por favor, escolha o módulo que está aula fara parte!");
    const [infoModuleClassColor, setInfoModuleClassColor] = useState("gray");
    const [infoOrderClass, setInfoOrderClass] = useState("Por favor, escolha a ordem da aula no módulo!");
    const [infoOrderClassColor, setInfoOrderClassColor] = useState("gray");

    const style = {
        idCourse:{color:infoIdCourseColor, borderColor:infoIdCourseColor},
        youtube:{color:infoYoutubeColor, borderColor:infoYoutubeColor},
        name:{color:infoNameClassColor, borderColor:infoNameClassColor},
        description:{color:infoDescriptionClassColor, borderColor:infoDescriptionClassColor},
        module:{color:infoModuleClassColor, borderColor:infoModuleClassColor},
        order:{color:infoOrderClassColor, borderColor:infoOrderClassColor},
    };

    const returnID = () => {
        const date = new Date();
        return ('C'+date.getFullYear()+'L'+date.getMonth()+'A'+date.getDate()+'S'+
                   date.getDay()+'S'+date.getHours()+'E'+date.getMinutes()+'S'+date.getSeconds()+'S'+
                   date.getMilliseconds());
    };

    const saveClass = () => {
        api.post('/v1/classes/', {
            idCourseControl: document.getElementById("controlIdCourse").value,
            idControl: document.getElementById("controlIdClass").value,
            nameClass: document.getElementById("nameClass").value,
            description: document.getElementById("descriptionClass").value,
            moduleControl: document.getElementById("moduleClass").value,
            moduleOrder: document.getElementById("moduleOrder").value,
            linkYoutube: document.getElementById("linkYoutube").value
        }).then(res => {
            return res.status;
        }).catch(error => {
            return error;
        });

    };

    const backToStartIdCourse = () => {
        setInfoIdCourseColor("gray");
        setInfoIdCourse("Insira aqui o ID de controle do curso!");
    };

    const backToStartYoutube = () => {
        setInfoYoutubeColor("gray");
        setInfoYoutube("Insira aqui o link do vídeo!");
    };

    const backToStartClass = () => {
        setInfoNameClassColor("gray");
        setInfoNameClass("Por favor, insira o título da aula!");
    };

    const backToStartDescription = () => {
        setInfoDescriptionClassColor("gray");
        setInfoDescriptionClass("Por favor, insira uma descrição para a aula!");
    };

    const backToStartModule = () => {
        setInfoModuleClassColor("gray");
        setInfoModuleClass("Por favor, escolha o módulo que está aula fara parte!");
    };

    const backToStartOrder = () => {
        setInfoOrderClassColor("gray");
        setInfoOrderClass("Por favor, escolha a ordem da aula no módulo!");
    };

    const clearForm = () => {
        backToStartIdCourse();
        backToStartYoutube();
        backToStartClass();
        backToStartDescription();
        backToStartModule();
        backToStartOrder();
    }

    const submitValidate = () => {
        let idClass = document.getElementById("controlIdClass");
        let idCourse = document.getElementById("controlIdCourse");
        let youtube = document.getElementById("linkYoutube");
        let nameClass = document.getElementById("nameClass");
        let description = document.getElementById("descriptionClass");
        let module = document.getElementById("moduleClass");
        let order = document.getElementById("moduleOrder");

        if (idCourse.value === ""){
            setInfoIdCourseColor("red");
            setInfoIdCourse("Você esqueceu de inserir o ID de controle do curso!");
        } else if (youtube.value === ""){
            setInfoYoutubeColor("red");
            setInfoYoutube("Você esqueceu de inserir o link do vídeo!");            
        } else if (nameClass.value === ""){
            setInfoNameClassColor("red");
            setInfoNameClass("Você esqueceu de inserir o título da aula!");
        } else if (description.value === ""){
            setInfoDescriptionClassColor("red");
            setInfoDescriptionClass("Você esqueceu de inserir a descrição da aula!");
        } else if (module.value === "----------"){
            setInfoModuleClassColor("red");
            setInfoModuleClass("Você esqueceu de escolher o módulo que está aula fara parte!");
        } else if (order.value === "----------"){
            setInfoOrderClassColor("red");
            setInfoOrderClass("Você esqueceu de escolher a ordem da aula no módulo!");
        } else {
            saveClass();
            clearForm();
            setCmShow(true);
            idClass.value = returnID();
            idCourse.value = "";
            youtube.value = "";
            nameClass.value = "";
            description.value = "";
            module.value = "----------";
            order.value = "----------";
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
                        <p>Aula criada com sucesso!</p>
                        <Button variant="dark" onClick={() => {setCmShow(false)}} className='mt-2 m-3'>OK</Button>
                    </Modal.Body>
                </Modal>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdClass">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Este é o ID de controle da aula!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdCourse">
                        <Form.Control type="text" onInput={() => backToStartIdCourse()} style={style.idCourse} placeholder="ID de controle do curso"/>
                        <Form.Text style={style.idCourse}>
                            {infoIdCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="linkYoutube">
                        <Form.Control type="text" onInput={() => backToStartYoutube()} style={style.youtube} placeholder="https://www.youtube.com/..."/>
                        <Form.Text style={style.youtube}>
                            {infoYoutube}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nameClass">
                        <Form.Control type="text" onInput={() => backToStartClass()} style={style.name} placeholder="Nome da aula" />
                        <Form.Text style={style.name}>
                            {infoNameClass}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descriptionClass">
                        <Form.Control as="textarea" onInput={() => backToStartDescription()}  style={style.description} rows={3} />
                        <Form.Text style={style.description}>
                            {infoDescriptionClass}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="moduleClass" onInput={() => backToStartModule()}  style={style.module}>
                            <option>----------</option>
                            <option value={1}>Módulo 1</option>
                            <option value={2}>Módulo 2</option>
                            <option value={3}>Módulo 3</option>
                            <option value={4}>Módulo 4</option>
                            <option value={5}>Módulo 5</option>
                            <option value={6}>Módulo 6</option>
                            <option value={7}>Módulo 7</option>
                            <option value={8}>Módulo 8</option>
                            <option value={9}>Módulo 9</option>
                            <option value={10}>Módulo 10</option>
                        </Form.Select>
                        <Form.Text style={style.module}>
                            {infoModuleClass}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="moduleOrder" onInput={() => backToStartOrder()} style={style.order}>
                            <option>----------</option>
                            <option value={1}>Ordem 1</option>
                            <option value={2}>Ordem 2</option>
                            <option value={3}>Ordem 3</option>
                            <option value={4}>Ordem 4</option>
                            <option value={5}>Ordem 5</option>
                            <option value={6}>Ordem 6</option>
                            <option value={7}>Ordem 7</option>
                            <option value={8}>Ordem 8</option>
                            <option value={9}>Ordem 9</option>
                            <option value={10}>Ordem 10</option>
                        </Form.Select>
                        <Form.Text style={style.order}>
                            {infoOrderClass}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveClass">
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

export default NewClass;