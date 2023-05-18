import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import api from "../../../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

function GroupsUsers() {
    const [user, setUser] = useState([]);

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/admin/home/groups/users/", "");
    
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/group/users/${id}`).then(res => {
            return setUser(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>{user[0]?.groupName} [{user[0]?.subject !== undefined ? user[0]?.subject : "Sem Registros"}]</h4></Accordion.Header>
                        <Accordion.Body>
                            {user[0]?.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Table striped bordered hover className='mt-2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.length > 0 ? user.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.firstName} {item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td align='center'>
                                            <Button variant='danger' as={NavLink} to={item.link}>Remover</Button>
                                        </td>
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

export default GroupsUsers;