import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../../components/tab/TabInfo';
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import api from "../../../../services/api";

function ClassFree() {
    let navigate = useNavigate();
    const [classes, setClasses] = useState('');

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/home/classes/", "");

    useEffect(() => {
        api.get(`/v1/user/classes/class/${id}`).then(res => {
            return setClasses(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [id]);

    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} onClick={() => navigate(-1)} to="" key="" href="">Aulas livres</Breadcrumb.Item>
                <Breadcrumb.Item active>Aula</Breadcrumb.Item>
            </>
        )
    };
    
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Assista a aula até ao final para computar no sistema."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info={"Aula livre [ "+classes[0]?.nameClass+" ]"}/>
            <Container style={{height:600}} className='shadow-sm overflow-auto'>
                <Row className='mt-2 p-2'>
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} style={{height: '500px'}} className='d-flex align-items-center'>
                        <ReactPlayer
                            url={classes[0]?.linkYoutube}
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

export default ClassFree;