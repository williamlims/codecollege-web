import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


function ClassEdit() {

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
        return ('C'+date.getFullYear()+'L'+date.getMonth()+'A'+date.getDate()+'S'+
                   date.getDay()+'S'+date.getHours()+'E'+date.getMinutes()+'S'+date.getSeconds()+'S'+
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
                    <Form.Group className="mb-3 mt-2" controlId="controlIdClass">
                        <Form.Control type="text" disabled value={returnID()}/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Este é o ID de controle da aula!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="controlIdCourse">
                        <Form.Control type="text" placeholder="ID de controle do curso"/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Insira aqui o ID de controle do curso!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="linkYoutube">
                        <Form.Control type="text" placeholder="https://www.youtube.com/..."/>
                        <Form.Text style={style.conrtolIDColor}>
                            {`Insira aqui o link do vídeo!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nameClass">
                        <Form.Control type="text" onInput={() => backToStartNameCourse()} style={style.nameCourseColor} placeholder="Nome da aula" />
                        <Form.Text style={style.nameCourseColor}>
                            {infonameCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descriptionClass">
                        <Form.Control as="textarea" style={style.descriptionCourseColor} rows={3} />
                        <Form.Text style={style.descriptionCourseColor}>
                            {infodescriptionCourse}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select id="moduleClass" style={style.levelCourseColor}>
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
                        <Form.Text style={style.levelCourseColor}>
                            {`Por favor, escolha o módulo que está aula fará parte!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Select id="moduleOrdem" style={style.areaCourseColor}>
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
                        <Form.Text style={style.areaCourseColor}>
                            {`Por favor, escolha a ordem da aula no módulo!`}
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

export default ClassEdit;