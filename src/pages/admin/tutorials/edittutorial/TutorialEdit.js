import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


function TutorialEdit() {

    const [cmShow, setCmShow] = useState(false);
    const [infonameCourse, setInfonameCourse] = useState("Por favor, insira o nome do curso!");
    const [infonameCourseColor, setInfonameCourseColor] = useState("gray");

    const [infodescriptionCourse, setInfodescriptionCourse] = useState("Por favor, insira uma descrição para o curso!");
    const [infodescriptionCourseColor, setInfodescriptionCourseColor] = useState("gray");


    const style = {
        nameCourseColor:{color:infonameCourseColor, borderColor:infonameCourseColor},
        descriptionCourseColor:{color:infodescriptionCourseColor, borderColor:infodescriptionCourseColor},
        
    };

    const returnID = () => {
        const date = new Date();
        return ('T'+date.getFullYear()+'U'+date.getMonth()+'T'+date.getDate()+'O'+
                   date.getDay()+'R'+date.getHours()+'I'+date.getMinutes()+'A'+date.getSeconds()+'L'+
                   date.getMilliseconds());
    };

    const backToStartNameCourse = () => {
        setInfonameCourseColor("gray");
        setInfonameCourse("Por favor, insira o nome do curso!");
    };

    const backToStartSurname = () => {
        infodescriptionCourseColor("gray");
        infodescriptionCourse("Por favor, insira o sobrenome de usuário!");
    };

    const clearForm = () => {
        backToStartNameCourse();
        backToStartSurname();
    }

    const submitValidate = () => {
        let nameCourse = document.getElementById("nameCourse").value;
        let descriptionCourse = document.getElementById("descriptionCourse").value;
        let levelCourse = document.getElementById("levelCourse").value;
        let areaCourse = document.getElementById("areaCourse").value;
        
        if (nameCourse === ""){
            setInfonameCourse("Você esqueceu de inserir o nome do curso!");
            setInfonameCourseColor("red");
        } else if (descriptionCourse === ""){
            setInfodescriptionCourse("Você esqueceu de inserir uma descrição para o curso!");
            infodescriptionCourseColor("red");
        } else if (levelCourse === "----------"){

        } else if (areaCourse === "----------"){

        } else {
            // set the database tasks here
            clearForm();
            setCmShow(true);
        }
        
    };

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Form as={Col} xl={8} lg={12} md={12} sm={12} es={12}>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdTutorial">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Este é o ID de controle deste tutorial!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="tutorialName">
                        <Form.Control type="text" placeholder="Nome do tutorial"/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Por favor, insira o nome do tutorial!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="fileDocument">
                        <Form.Control type="file" disabled placeholder="Envie o arquivo"/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Envie o documento referente ao tutorial (ex: tutorial.pdf)!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelTutorial" style={style.levelCourseColor}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {`Por favor, escolha o módulo que está aula fará parte!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="tutotialSubject" style={style.areaCourseColor}>
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
                        <Form.Text style={style.areaCourseColor}>
                            {`Por favor, escolha o assunto deste tutorial!`}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveCourse">
                            <Button variant="dark" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                Salvar
                            </Button>{`  `}
                            <Button variant="danger" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                Excluir
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default TutorialEdit;