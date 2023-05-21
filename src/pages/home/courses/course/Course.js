import React, { useEffect, useState } from 'react';
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
import { useLocation } from "react-router-dom";
import api from "../../../../services/api";

function Course() {
    const [classes, setClasses] = useState([]);

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/home/courses/", "");
    
    useEffect(() => {
        api.get(`/v1/user/courses/${id}/classes`).then(res => {
            return setClasses(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [id]);

    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/courses" key="/home/courses" href="/home/courses">Cursos</Breadcrumb.Item>
                <Breadcrumb.Item active>Curso</Breadcrumb.Item>
            </>
        )
    };

    const returnClasses = () => {
        let structure = [];
        let cont = 0;
        for (let i =0; i<classes.length; i++){
            if(classes[i].moduleControl>cont){
                cont = classes[i].moduleControl;
                structure.push(
                    <Row className='mt-2 p-2 fw-bold'>
                        <Col>Módulo {classes[i].moduleControl}</Col>
                    </Row>
                );
            }
            structure.push(
                <Row className='mt-0 p-2' key={i}>
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} >
                        <Nav.Link to={`/home/courses/${classes[i].idControl}/class/${classes[i].idClass}`} key={`/home/courses/${classes[i].idControl}/class/${classes[i].idClass}}`} as={NavLink}>{classes[i].moduleOrder}. {classes[i].nameClass}</Nav.Link>
                    </Col>
                </Row>
            );
        }
        return structure;
    }

    return (
        <>
            <NavMain messageUser="Aqui você encontra o conteúdo do curso."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info={"Curso [ "+classes[0]?.nameCourse+" ]"}/>
            <Container style={{height:600}} className='shadow-sm overflow-auto bg-light'>
                
                <Row className='mt-0 p-2 text-white-50 bg-secondary' >
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} >
                        <span className={{fontFamily:'Arial', fontSize: 16}}>{classes[0]?.description}</span>
                    </Col>
                </Row>
                {classes.length > 0 ? returnClasses()
                : <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhuma aula foi cadastrada ainda!</td></tr>}
            </Container>
            <Footer />
            
        </>
    );
}

export default Course;