import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavMain from '../../components/navMain/NavMain';
import BreadcrumbPath from '../../components/pathNavigation/BreadcrumbPath';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';
import { AiFillApple, AiFillAmazonCircle, AiFillGithub, AiFillHtml5, AiFillSignal, AiFillTwitterSquare } from "react-icons/ai";

import { BsFillGearFill, 
         BsBarChartLineFill, 
         BsYoutube,
         BsFillBookFill,
         BsFileEarmarkPdfFill,
         BsFileEarmarkTextFill,
         BsFillEaselFill
} from "react-icons/bs";


function Home() {
    
    const path = { 
        element: (
            <>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </>
        )
    };

    return (
        <>
            <NavMain nameUser="Marcos Luiz"/>
            <BreadcrumbPath path={path.element}/>
            <Container>
                <Row>
                    <Col sm={3} className="p-2 mb-3">
                        <Nav.Link to="/home/courses" key="/home/courses" as={NavLink}>
                            <Col className="w-100 p-2 shadow" variant="primary" as={Button} style={{borderRadius:0, height:230}}>
                                <div>
                                    <p style={{fontSize:30}}>Cursos <BsFillEaselFill /></p>
                                    <p style={{fontSize:18}}>Cursos completos disponibilizados no sistema</p>
                                </div>
                            </Col>
                        </Nav.Link>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Nav.Link to="/home/tutorials" key="/home/courses" as={NavLink}>
                            <Col className="w-100 p-2 shadow" variant="secondary" as={Button} style={{borderRadius:0, height:230}}>
                                <div>
                                    <p style={{fontSize:30}}>Tutoriais <BsFileEarmarkTextFill /></p>
                                    <p style={{fontSize:18}}>Tutoriais disponibilizados no sistema</p>
                                </div>
                            </Col>
                        </Nav.Link>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Col className="w-100 p-2 shadow" variant="danger" as={Button} style={{borderRadius:0, height:230}}>
                            <div>
                                <p style={{fontSize:30}}>Aulas Livres <BsYoutube /></p>
                                <p style={{fontSize:18}}>Aulas livres sem vínculo com cursos</p>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Col className="w-100 p-2 shadow" variant="success" as={Button} style={{borderRadius:0, height:230}}>
                            <div>
                                <p style={{fontSize:30}}>Bibliotecas <BsFillBookFill /></p>
                                <p style={{fontSize:18}}>Livros ou documentos disponibilizados para consulta</p>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Col className="w-100 p-2 shadow" variant="warning" as={Button} style={{borderRadius:0, height:230}}>
                            <div>
                                <p style={{fontSize:30}}>Certificados <BsFileEarmarkPdfFill /></p>
                                <p style={{fontSize:18}}>Baixe os certificados dos seus cursos concluídos</p>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Col className="w-100 p-2 shadow" variant="light" as={Button} style={{borderRadius:0, height:230}}>
                            <div>
                                <p style={{fontSize:30}}>Desempenho <BsBarChartLineFill /></p>
                                <p style={{fontSize:18}}>Acompanhe o seu desempenho na plataforma</p>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={3} className="p-2 mb-3">
                        <Col className="w-100 p-2 shadow" variant="info" as={Button} style={{borderRadius:0, height:230}}>
                            <div>
                                <p style={{fontSize:30}}>Preferências <BsFillGearFill /></p>
                                <p style={{fontSize:18}}>Configurações do sistema e da sua conta</p>
                            </div>
                        </Col>
                    </Col>
                </Row>   
            </Container>
        </>
    );
}

export default Home;