import * as React from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../components/tab/TabInfo';

function Library() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Biblioteca</Breadcrumb.Item>
            </>
        )
    };
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Aqui você encontra livros e documentos disponíveis no sistema."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Biblioteca"/>
            <Container style={{height:800}}>
                Biblioteca
            </Container>
            <Footer />
            
        </>
    );
}

export default Library;