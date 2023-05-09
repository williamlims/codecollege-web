import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const dadosTeste = [
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Introdução', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/1'},
    {id:'F2023R4E9E2C16L20A36S675S', aula:'Primeiros Passos', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/2'},
    {id:'F2023R4E9E2C16L20A36S676S', aula:'Análise de código', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/3'},
    {id:'F2023R4E9E2C16L20A36S677S', aula:'Design', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/4'},
    {id:'F2023R4E9E2C16L20A36S678S', aula:'Matemmática Avançada', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/5'},
    {id:'F2023R4E9E2C16L20A36S679S', aula:'Objetos Compostos', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/6'},
    {id:'F2023R4E9E2C16L20A36S680S', aula:'Dados em Escala', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/7'},
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
                            <th>NÍVEL</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.aula}</td>
                                        <td>{item.nivel}</td>
                                        <td>{item.assunto}</td>
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