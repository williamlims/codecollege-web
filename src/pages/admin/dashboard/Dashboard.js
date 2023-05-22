import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import api from "../../../services/api";

function Dashboard() {
    const [users, setUsers] = useState(0);
    const [courses, setCourses] = useState(0);
    const [libraries, setLibraries] = useState(0);
    const [tutorials, setTutorials] = useState(0);
    const [groups, setGroups] = useState(0);
    const [days, setDays] = useState([]);  
        
    useEffect(() => {
        api.get('/v1/services/users').then(res => {
            setUsers(res.data.namberUsers);
        }).catch(error => {
            return error;
        });

        api.get('/v1/services/courses').then(res => {
            setCourses(res.data.namberCourses);
        }).catch(error => {
            return error;
        });

        api.get('/v1/services/libraries').then(res => {
            setLibraries(res.data.namberLibraries);
        }).catch(error => {
            return error;
        });

        api.get('/v1/services/tutorials').then(res => {
            setTutorials(res.data.namberTutorials);
        }).catch(error => {
            return error;
        });

        api.get('/v1/services/groups').then(res => {
            setGroups(res.data.namberGroups);
        }).catch(error => {
            return error;
        });

        api.get('/v1/services/getaccess').then(res => {
            setDays(res.data);
        }).catch(error => {
            return error;
        });


    }, []);

    const labels = ["Usuários", "Cursos", "Documentos", "Tutoriais", "Grupos"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Estatísticas do Sistema",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                data: [users, courses, libraries, tutorials, groups, (users+courses+libraries+tutorials+groups)],
            },
        ],
    };

    const labels2 = ["Conteúdo disponibilizado", "Usuários registrados"];
    const data2 = {
        labels: labels2,
        datasets: [
            {
                label: "Conteúdo x Usuários",
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(0, 0, 0)",
                data: [(courses+libraries+tutorials), users],
            },
        ],
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} xs={12}>
                        <div>
                            <Bar data={data} />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xs={12}>
                        <div>
                            <Line data={data2} />
                        </div>
                    </Col>
                </Row>
                <Row className='bg-primary w-100'>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;