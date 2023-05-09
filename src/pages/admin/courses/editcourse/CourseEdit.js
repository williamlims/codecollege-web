import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


function CourseEdit() {

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
        return ('C'+date.getFullYear()+'O'+date.getMonth()+'U'+date.getDate()+'R'+
                   date.getDay()+'S'+date.getHours()+'E'+date.getMinutes()+'I'+date.getSeconds()+'D'+
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
                    <Form.Group className="mb-3 mt-2" controlId="controlId">
                        <Form.Control type="text" disabled value={returnID()}/>
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
                        <Form.Control as="textarea" style={style.descriptionCourseColor} rows={3} />
                        <Form.Text style={style.descriptionCourseColor}>
                            {infodescriptionCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="levelCourse" style={style.levelCourseColor}>
                            <option>----------</option>
                            <option value={1}>Iniciante</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                            <option value={4}>Especialista</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {`Por favor, escolha o nível do curso!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="areaCourse" style={style.areaCourseColor}>
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
                            {`Por favor, escolha a área do curso!`}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveCourse">
                            <Button variant="dark" as={Col} md={2} lg={2} sm={2} onClick={() => submitValidate()} type="submit" >
                                Salvar
                            </Button>{` `}
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

export default CourseEdit;