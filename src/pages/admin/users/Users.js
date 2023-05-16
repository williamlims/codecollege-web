import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import api from "../../../services/api";

function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        api.get('/v1/users/').then(res => {
            return setUser(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <>
            <Container fluid className='py-1 px-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>NÍVEL DE ACESSO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.length > 0 ? user.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.levelUser === 1 ? 'Usuário': 'Administrador'}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={`/admin/home/users/edit/${item.idControl}`}>Editar</Button></td>
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

export default Users;