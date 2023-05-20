import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Button from 'react-bootstrap/Button';
import { BsFillCloudArrowDownFill } from "react-icons/bs";

function Certificates() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Certificados</Breadcrumb.Item>
            </>
        )
    }

    const certificate = () => {
        return (
            <>
                <Row className='bg-light shadow-sm m-1 mt-2 p-2'>
                    <Col sm={1} className='d-flex justify-content-start align-self-center'>
                        <img src={{}} width="40" height="40" className="d-inline-block align-top bg-light" alt="Logo" /> 
                    </Col>
                    <Col className='d-flex justify-content-start mt-1 align-self-center'>
                        <div style={{fontFamily:'Arial', fontSize:18, alignContent:'center'}}>Programação em Javascript</div>
                    </Col>
                    <Col className='d-flex justify-content-end align-self-center'>
                        <Button size="md" href="/home/certificates/print/5" target='_blank' style={{maxHeight:40}}><BsFillCloudArrowDownFill /> Baixar</Button>
                    </Col>       
                </Row>
            </>
        )
    }

    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Baixe os certificados dos seus cursos concluídos."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Certificados"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow overflow-auto' style={{height:600}}>
                    {certificate()}
                    {certificate()}
                    {certificate()}
                    {certificate()}
                    {certificate()}
                    {certificate()}
                    {certificate()}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Certificates;