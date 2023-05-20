import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../../../components/navMain/NavMain';
import Footer from '../../../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../../../components/tab/TabInfo';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import { useLocation } from "react-router-dom";
import api from "../../../../../services/api";

function Class() {
    const [classs, setClasss] = useState("");

    const location = useLocation();
    const urlpath = location.pathname;
    const getData = urlpath.split("/");
    const idCourse = getData[3];
    const idClass = getData[5];
    
    useEffect(() => {
        api.get(`/v1/user/courses/${idCourse}/classes/${idClass}`).then(res => {
            return setClasss(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [idCourse, idClass]);

    let navigate = useNavigate();
    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/courses" key="/home/courses" href="/home/courses">Cursos</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} onClick={() => navigate(-1)} to="" key="" href="">Curso</Breadcrumb.Item>
                <Breadcrumb.Item active>Aula</Breadcrumb.Item>
            </>
        )
    };
    
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Assista a aula até ao final para computar no sistema."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info={"Aula [ "+classs[0]?.nameClass+" ]"}/>
            <Container style={{height:600}} className='shadow-sm overflow-auto'>
                <Row className='mt-1 p-2'>
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} style={{height: '500px'}} className='d-flex align-items-center'>
                        <ReactPlayer
                            url={classs[0]?.linkYoutube}
                            width='100%'
                            height='100%'
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
            
        </>
    );
}

export default Class;