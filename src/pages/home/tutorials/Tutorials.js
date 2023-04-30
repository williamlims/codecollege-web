import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

function Tutorials() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Tutoriais</Breadcrumb.Item>
            </>
        )
    };

    const documento = () => {
        return (
            <>
                <Row className='bg-light shadow-sm m-1 mt-2 p-2 align-self-center'>
                    <Col className='d-flex justify-content-start mt-1'>
                        <div style={{fontFamily:'Arial', fontSize:18, alignContent:'center'}}>Documentação do sistema de cadastramento</div>
                    </Col>
                    <Col className='d-flex justify-content-end align-self-center'>
                        <Button size="md" href="https://www.google.com" target='_blank' style={{maxHeight:40}}><BsFillFileEarmarkTextFill /> Visualizar</Button>
                    </Col>       
                </Row>
            </>
        )
    };
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Explore os tutoriais disponíveis."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Tutoriais"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow overflow-auto' style={{height:600}}>
                    {documento()}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Tutorials;