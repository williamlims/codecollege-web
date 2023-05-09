import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const dadosTeste = [
    {id:'D2023O4C9U2M15E53N58T610', documento:'Programação Java', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/1'},
    {id:'D2023O4C9U2M15E53N58T611', documento:'Lógica de Programação', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/2'},
    {id:'D2023O4C9U2M15E53N58T612', documento:'Negócios', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/3'},
    {id:'D2023O4C9U2M15E53N58T613', documento:'Marketing', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/4'},
    {id:'D2023O4C9U2M15E53N58T614', documento:'Inglês Instrumental', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/5'},
    {id:'D2023O4C9U2M15E53N58T615', documento:'Regras de Negócios', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/6'},
    {id:'D2023O4C9U2M15E53N58T616', documento:'Data Science', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/registers/edit/7'},
];

function Registers() {
    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DOCUMENTO</th>
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
                                        <td>{item.documento}</td>
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

export default Registers;