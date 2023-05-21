import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../components/tab/TabInfo';
import Button from 'react-bootstrap/Button';
import api from "../../../services/api";

function Courses() {
    const [course, setCourse] = useState([]);

    const idUser = sessionStorage.getItem("idUser");

    useEffect(() => {
        api.get(`/v1/user/courses/${idUser}`).then(res => {
            return setCourse(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [idUser]);

    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Cursos</Breadcrumb.Item>
            </>
        )
    };
    return (
        <>
            <NavMain messageUser="Cursos disponíveis na plataforma."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Cursos"/>
            <Container style={{height:600}} className='shadow-sm overflow-auto'>
                {course.length > 0 ? course.map( (item, index) => {
                    return (
                        <Row className='shadow-sm mt-2 p-2 m-2 bg-white'>
                            <Col sm={5} xs={12} md={6} lg={6} xl={6} className='text-break m-2 p-1'>
                                <span style={{fontFamily:'Arial Black', fontSize: 16}}>{item?.nameCourse}</span> < br/> 
                                <span style={{fontFamily:'Arial', fontSize: 14}}>{item?.description}</span>
                            </Col>
                            <Col sm={3} xs={4} md={4} lg={3} xl={3} className='m-2 p-1 d-flex align-items-center'>
                                <Button as={NavLink} to={"/home/courses/"+item?.idControl} variant="primary">
                                    Entrar no curso
                                </Button>
                            </Col>
                        </Row>
                        );
                    }
                ): <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhum curso encontrado!</td></tr>}
            </Container>
            <Footer />
            
        </>
    );
}

export default Courses;