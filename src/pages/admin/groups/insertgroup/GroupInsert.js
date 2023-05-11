import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


function GroupInsert() {

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
                    <Form.Group className="mb-3">
                        <Form.Select id="optionGroup" style={style.levelCourseColor}>
                            <option>----------</option>
                            <option value={1}>Usuário</option>
                            <option value={2}>Curso</option>
                            <option value={3}>Tutorial</option>
                            <option value={4}>Aula Livre</option>
                            <option value={5}>Biblioteca</option>
                        </Form.Select>
                        <Form.Text style={style.levelCourseColor}>
                            {`Por favor, escolha a opção a ser inserida no grupo!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemID">
                        <Form.Control type="text" onInput={() => backToStartNameCourse()} style={style.nameCourseColor} placeholder="Ex: I2023T4E9M2I19D30C38H109O" />
                        <Form.Text style={style.nameCourseColor}>
                            {`Por favor, insira aqui o ID do item escolhido!`}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemID">
                        <Form.Control type="text" onInput={() => backToStartNameCourse()} style={style.nameCourseColor} placeholder="Ex: G2023R4O9U2P19I30D38C109T" />
                        <Form.Text style={style.nameCourseColor}>
                            {`Por favor, insira aqui o ID do GRUPO!`}
                        </Form.Text>
                    </Form.Group>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="btnSaveCourse">
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