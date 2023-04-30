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
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

function ClassFree() {
    let navigate = useNavigate();
    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} onClick={() => navigate(-1)} to="" key="" href="">Aulas livres</Breadcrumb.Item>
                <Breadcrumb.Item active>Aula</Breadcrumb.Item>
            </>
        )
    };
    const style = {
        playerWrapper: {
            position: 'relative',
            paddingTop: '56.25%',
        },
        reactPlayer: {
            position: 'absolute',
            top: 0,
            left: 0,
        }
    };
    
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Assista a aula até ao final para computar no sistema."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Aula livre"/>
            <Container style={{height:600}} className='shadow-sm overflow-auto'>
                <Row className='mt-2 p-2'>
                    <Col sm={12} xs={12} md={12} lg={12} xl={12} style={{height: '500px'}} className='d-flex align-items-center'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
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