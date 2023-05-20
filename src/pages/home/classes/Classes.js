import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Button from 'react-bootstrap/Button';
import api from "../../../services/api";

function Classes() {
    const [classes, setClasses] = useState([]);

    const userIDteste = 'U2023S4E18R4I20D9C22T958'; // pegar essa informação da sessão

    useEffect(() => {
        api.get(`/v1/user/classes/user/${userIDteste}`).then(res => {
            return setClasses(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [userIDteste]);

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
            <NavMain nameUser="Marcos Luiz" messageUser="Nessa página você tem acesso às aulas livres."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Aulas livres"/>
            <Container style={{height:600}} className=' shadow-sm overflow-auto bg-white'>
                {classes.length > 0 ? classes.map( (item, index) => {
                    return (
                        <Row className='shadow-sm mt-2 p-2 m-2 bg-white' key={index}>
                            <Col sm={5} xs={12} md={6} lg={6} xl={6} className='text-break m-2 p-1'>
                                <span style={{fontFamily:'Arial Black', fontSize: 16}}>{item.nameClass} </span> < br/> 
                                <span style={{fontFamily:'Arial', fontSize: 14}}>{item.description} </span>
                            </Col>
                            <Col sm={3} xs={4} md={4} lg={3} xl={3} className='m-2 p-1 d-flex align-items-center'>
                                <Button as={NavLink} to={`/home/classes/${item.idControl}`} variant="primary">
                                    Assistir aula
                                </Button>
                            </Col>
                        </Row>
                        );
                    }
                ): <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhuma aula encontrada!</td></tr>}
            </Container>
            <Footer />
        </>
    );
}

export default Classes;