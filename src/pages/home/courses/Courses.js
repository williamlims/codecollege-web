import * as React from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../components/tab/TabInfo';

function Courses() {
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
            <NavMain nameUser="Marcos Luiz"/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Cursos"/>
            <Container style={{height:800}}>
                Cursos
            </Container>
            <Footer />
            
        </>
    );
}

export default Courses;