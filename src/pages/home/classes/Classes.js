import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';

function Classes() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Aulas livres</Breadcrumb.Item>
            </>
        )
    };
    return (
        <>
            <NavMain nameUser="Marcos Luiz"/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Aulas livres"/>
            <Container style={{height:800}}>
                Aulas Livres
            </Container>
            <Footer />
        </>
    );
}

export default Classes;