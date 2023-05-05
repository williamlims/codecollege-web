import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const dadosTeste = [
    {id:1, nome:'Marcos', email:'marcosnet@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/1'},
    {id:2, nome:'André', email:'andrefaria@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/2'},
    {id:3, nome:'Marta', email:'mmt2055@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/3'},
    {id:4, nome:'Rita', email:'ritalia55@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/4'},
    {id:5, nome:'Andreia', email:'andriafot@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/5'},
    {id:6, nome:'Fernanda', email:'fernuut@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/6'},
    {id:7, nome:'Renata', email:'renatinha87@gmail.com', usuario:'usuário', link:'/admin/home/users/edit/7'},
];

function Users() {
    return (
        <>
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Nível de Acesso</th>
                            <th>------</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.usuario}</td>
                                        <td><Button variant='dark' as={NavLink} to={item.link}>Editar</Button></td>
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

export default Users;