import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../../components/tab/TabInfo';
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';
import { BsFillPersonFill, BsFillEyeSlashFill } from "react-icons/bs";
import user from '../../../../assets/userMain.png';

function Profile() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/preferences" key="/home/preferences" href="/home/preferences">Preferências</Breadcrumb.Item>
                <Breadcrumb.Item active>Perfil</Breadcrumb.Item>
            </>
        )
    }
    const styles = {
        marginsFildes: {
            marginLeft:15, 
            marginRight:15
        },
        colorFieldData: {
            color:'gray'
        },
        textTop: {
            fontFamily:'Arial',
            fontSize: 20,
            color: 'black'
        }
    };
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Mantenha o seu perfil atualizado."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Perfil"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow'>
                    <Form>
                        < br/>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Text style={styles.textTop}>Alterar Foto</Form.Text>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col} sm={2} controlId="photoUser">
                                <img src={user} width="150" height="150" 
                                style={{borderBlockColor:'black'}} className=" shadow d-inline-block align-top" alt="pho" />
                            </InputGroup>

                            <InputGroup as={Col} sm={6} className='mt-2' controlId="photoUserLink">
                                <Form.Control type="file" />
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Text style={styles.textTop}>Alterar cadastro</Form.Text>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col} controlId="nameUser">
                                <Form.Control type="text" placeholder="Insira seu nome"/>                         
                                <InputGroup.Text id="nameOne"><BsFillPersonFill /></InputGroup.Text>        
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col} controlId="surnameUser">
                                <Form.Control type="text" placeholder="Insira seu sobrenome" />
                                <InputGroup.Text id="bnameTwo"><BsFillPersonFill /></InputGroup.Text> 
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col} controlId="birthdayUser">
                                <Form.Control type="date" style={styles.colorFieldData} />
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Text style={styles.textTop}>Alterar senha</Form.Text>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <InputGroup as={Col} controlId="surnameUser">
                                <Form.Control type="password" placeholder="Senha" />
                                <InputGroup.Text id="passOne"><BsFillEyeSlashFill /></InputGroup.Text>
                            </InputGroup>
                            <InputGroup as={Col} controlId="surnameUser">
                                <Form.Control type="password" placeholder="Repetir senha" />
                                <InputGroup.Text id="passTwo"><BsFillEyeSlashFill /></InputGroup.Text>
                            </InputGroup>
                        </Row>

                        <Row className="mb-4" style={styles.marginsFildes}>
                            <Form.Group as={Col} controlId="btnSave">
                                <Button variant="primary" as={Col} md={2} lg={2} sm={2} type="submit" >
                                    Atualizar
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                    <br />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Profile;