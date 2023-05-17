import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import api from "../../../../services/api";

const dadosTeste = [
    {id:'C2023L4A9S2S10E4S44S78', aula:'Introdução', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/1'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Primeiros Passos', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/2'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Análise de código', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/3'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Design', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/4'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Matemmática Avançada', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/5'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Objetos Compostos', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/6'},
    {id:'C2023L4A9S2S10E4S44S78', aula:'Dados em Escala', modulo:'1', curso:'Programação Java', link:'/admin/home/courses/classes/edit/7'},
];

function ClassesList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        api.get('/v1/classes/').then(res => {
            return setClasses(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    let getCourseName = (id) => {
        api.get(`/v1/courses/${id}`).then(res => {
            return res.data.nameCourse;
        }).catch(error => {
            return error;
        });
    };

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>AULA</th>
                            <th>MÓDULO</th>
                            <th>CURSO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.length > 0 ? classes.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.nameClass}</td>
                                        <td>{item.moduleControl}</td>
                                        <td>{(getCourseName(item.idCourseControl))}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={`/admin/home/courses/classes/edit/${item.idControl}`}>Editar</Button></td>
                                    </tr>
                                );
                            }
                        ): <tr style={{fontFamily: 'Arial Black', fontSize: 14}}><td  colSpan="5">Nenhum registro encontrado!</td></tr>}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ClassesList;