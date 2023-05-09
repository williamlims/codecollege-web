import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const dadosTeste = [
    {id:'C2023O4U9R2S10E4I44D78', curso:'Programação Java', nivel:'Iniciante', area:'Ciências Exatas e da Terra', link:'/admin/home/courses/edit/1'},
    {id:'C2023O4U9R3S10E4I44D79', curso:'Lógica de Programação', nivel:'Iniciante', area:'Ciências Exatas e da Terra', link:'/admin/home/courses/edit/2'},
    {id:'C2023O4U9R4S10E4I44D80', curso:'Negócios', nivel:'Iniciante', area:'Ciências Sociais Aplicadas', link:'/admin/home/users/courses/3'},
    {id:'C2023O4U9R5S10E4I44D81', curso:'Marketing', nivel:'Iniciante', area:'Ciências Sociais Aplicadas', link:'/admin/home/users/courses/4'},
    {id:'C2023O4U9R6S10E4I44D82', curso:'Inglês Instrumental', nivel:'Avançado', area:'Linguística, Letras e Artes', link:'/admin/home/courses/edit/5'},
    {id:'C2023O4U9R7S10E4I44D83', curso:'Regras de Negócios', nivel:'Especialista', area:'Ciências Sociais Aplicadas', link:'/admin/home/courses/edit/6'},
    {id:'C2023O4U9R8S10E4I44D84', curso:'Data Science', nivel:'Intermediário', area:'Ciências Exatas e da Terra', link:'/admin/home/courses/edit/7'},
];

function CourseList() {
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
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.curso}</td>
                                        <td>{item.nivel}</td>
                                        <td>{item.area}</td>
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

export default CourseList;