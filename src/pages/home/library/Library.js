import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import TabInfo from '../../../components/tab/TabInfo';
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import api from "../../../services/api";

function Library() {
    const [libraries, setLibraries] = useState([]);

    const idUser = sessionStorage.getItem("idUser");

    useEffect(() => {
        api.get(`/v1/user/libraries/user/${idUser}`).then(res => {
            return setLibraries(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [idUser]);

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
            <NavMain messageUser="Aqui você encontra livros e documentos disponíveis no sistema."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Biblioteca"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow overflow-auto' style={{height:600}}>
                    {libraries.length > 0 ? libraries.map( (item, index) => {
                        return (
                            <Row className='bg-light shadow-sm m-1 mt-2 p-2 align-self-center' key={index}>
                                <Col className='d-flex justify-content-start mt-1'>
                                    <div style={{fontFamily:'Arial', fontSize:18, alignContent:'center'}}>{item.nameDocument}</div>
                                </Col>
                                <Col className='d-flex justify-content-end align-self-center'>
                                    <Button size="md" href={item.filePath} target='_blank' style={{maxHeight:40}}><BsFillFileEarmarkTextFill /> Ler</Button>
                                </Col>       
                            </Row>
                            );
                        }
                    ): <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhum documento encontrado!</td></tr>}
                </Container>
            </main>
            <Footer />
            
        </>
    );
}

export default Library;