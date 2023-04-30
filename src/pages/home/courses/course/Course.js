import * as React from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../../components/tab/TabInfo';
import user from '../../../../assets/userMain.png';
import Button from 'react-bootstrap/Button';

function Course() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/courses" key="/home/courses" href="/home/courses">Cursos</Breadcrumb.Item>
                <Breadcrumb.Item active>Curso</Breadcrumb.Item>
            </>
        )
    };
    const aula = new Array([]);
    aula[0].push(5);
    const aulas = [
        [
            (<Nav.Link to="/home/courses/5/class/1" key="/home/courses/5/class/1" as={NavLink}>Aula 1</Nav.Link>),
            (<Nav.Link to="/home/courses/5/class/1" key="/home/courses/5/class/1" as={NavLink}>Aula 2</Nav.Link>),
            (<Nav.Link to="/home/courses/5/class/1" key="/home/courses/5/class/1" as={NavLink}>Aula 3</Nav.Link>)
        ],   
    ];
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Aqui você encontra o conteúdo do curso."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Curso"/>
            <Container style={{height:600}} className='shadow-sm overflow-auto'>
                <Row className='mt-2 p-2'>
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} >
                        {aulas[0][0]}
                        {aulas[0][1]}
                        {aulas[0][2]}
                        {aula[0][0]}
                    </Col>
                </Row>
            </Container>
            <Footer />
            
        </>
    );
}

export default Course;