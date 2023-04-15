import * as React from 'react';
import Container from 'react-bootstrap/Container';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../components/navMain/NavMain';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

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
            <Container >
                Courses
            </Container>
        </>
    );
}

export default Courses;