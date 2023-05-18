import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import api from "../../../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

function GroupsClasses() {
    const [classes, setClasses] = useState([]);

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/admin/home/groups/classes/", "");
    
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/group/classes/${id}`).then(res => {
            return setClasses(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>{classes[0]?.groupName} [{classes[0]?.subject !== undefined ? classes[0]?.subject : "Sem Registros"}]</h4></Accordion.Header>
                        <Accordion.Body>
                            {classes[0]?.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Table striped bordered hover className='mt-2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>AULA</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.length > 0 ? classes.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.nameClass}</td>
                                        <td>{item.subject}</td>
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

export default GroupsClasses;