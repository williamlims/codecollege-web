import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import api from "../../../services/api";

function CourseList() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        api.get('/v1/courses/').then(res => {
            return setCourse(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    const renderSwitchLevel = (level) => {
        switch(level) {
            case 1:
                return 'Iniciante';
            case 2:
                return 'Intermediário';
            case 3:
                return 'Avançado';
            case 4:
                return 'Especialista';
            default:
                return 'Error';
        }
    }

    const renderSwitchArea = (area) => {
        switch(area) {
            case 1:
                return 'Ciências Exatas e da Terra';
            case 2:
                return 'Ciências Biológicas';
            case 3:
                return 'Engenharias';
            case 4:
                return 'Ciências da Saúde';
            case 5:
                return 'Ciências Agrárias';
            case 6:
                return 'Linguística, Letras e Artes';
            case 7:
                return 'Ciências Sociais Aplicadas';
            case 8:
                return 'Ciências Humanas';
            default:
                return 'Error';
        }
    }

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CURSO</th>
                            <th>NÍVEL</th>
                            <th>ÁREA</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.length > 0 ? course.map( (item, index) => {
                            return (
                                    <tr>
                                        <td>{item.idControl}</td>
                                        <td>{item.nameCourse}</td>
                                        <td>{renderSwitchLevel(item.level)}</td>
                                        <td>{renderSwitchArea(item.area)}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={`/admin/home/courses/edit/${item.idControl}`}>Editar</Button></td>
                                    </tr>
                                );
                            }
                        ): <h5>Nenhum registro encontrado!</h5>}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default CourseList;