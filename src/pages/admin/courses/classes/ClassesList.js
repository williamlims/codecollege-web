import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

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
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.aula}</td>
                                        <td>{item.modulo}</td>
                                        <td>{item.curso}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={item.link}>Editar</Button></td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ClassesList;