import React, { useEffect, useState } from 'react';
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
import api from "../../../services/api";

function Certificates() {
    const [cert, setCert] = useState([]);
    const idUser = sessionStorage.getItem("idUser");

    useEffect(() => {
        api.get(`/v1/user/certificates/user/${idUser}`).then(res => {
            return setCert(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [idUser]);

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
            <NavMain messageUser="Baixe os certificados dos seus cursos concluídos."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Certificados"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow overflow-auto' style={{height:600}}>
                    {cert.length > 0 ? cert.map( (item, index) => {
                        return (
                            <Row className='bg-light shadow-sm m-1 mt-2 p-2' key={index}>
                                <Col className='d-flex justify-content-start mt-1 align-self-center'>
                                    <div style={{fontFamily:'Arial', fontSize:18, alignContent:'center'}}>{item.nameCourse}</div>
                                </Col>
                                <Col className='d-flex justify-content-end align-self-center'>
                                    <Button size="md" href={`/home/certificates/print/${item.idControl}/${idUser}`} target='_blank' style={{maxHeight:40}}><BsFillCloudArrowDownFill /> Baixar</Button>
                                </Col>       
                            </Row>
                            );
                        }
                    ): <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhum certificado encontrado!</td></tr>}     
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Certificates;