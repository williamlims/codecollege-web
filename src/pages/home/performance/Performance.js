import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import api from "../../../services/api";

function Performance() {
    const [courses, setCourses] = useState(0);
    const [tutorials, setTutorials] = useState(0);
    const [classes, setClasses] = useState(0);
    const [documents, setDocuments] = useState(0);
    const [certificates, setCertificates] = useState(0);
     
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Desempenho</Breadcrumb.Item>
            </>
        )
    };

    const userIDteste = 'U2023S4E18R4I9D27C52T948'; // pegar essa informação da sessão

    useEffect(() => {
        api.get(`/v1/user/courses/${userIDteste}`).then(res => {
            setCourses(res.data);
        }).catch(error => {
            return error;
        });

        api.get(`/v1/user/tutorials/user/${userIDteste}`).then(res => {
            setTutorials(res.data.length);
        }).catch(error => {
            return error;
        });

        api.get(`/v1/user/classes/user/${userIDteste}`).then(res => {
            setClasses(res.data.length);
        }).catch(error => {
            return error;
        });

        api.get(`/v1/user/libraries/user/${userIDteste}`).then(res => {
            setDocuments(res.data.length);
        }).catch(error => {
            return error;
        });

        api.get(`/v1/user/certificates/user/${userIDteste}`).then(res => {
            setCertificates(res.data.length);
        }).catch(error => {
            return error;
        });
    }, [userIDteste]);

    const labels = ["Cursos", "Tutoriais", "Aulas", "Documentos", "Certificados"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Disponibilidades x Execução",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                data: [courses, tutorials, classes, documents, certificates, (courses+tutorials+classes+documents+certificates)*2],
            },
        ],
    };

    return (
        <>
            <NavMain messageUser="Verifique o seu desempenho na plataforma."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Desempenho"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow' style={{height:600}}>
                    <Row>
                        <Col sm={12} md={6} lg={6} xs={12}>
                            <div>
                                <Bar data={data} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Performance;