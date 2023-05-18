import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import api from "../../../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

function GroupsDocuments() {
    const [document, setDocument] = useState([]);

    const location = useLocation();
    const urlpath = location.pathname;
    const id = urlpath.replace("/admin/home/groups/documents/", "");
    
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/group/libraries/${id}`).then(res => {
            return setDocument(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>{document[0]?.groupName} [{document[0]?.subject !== undefined ? document[0]?.subject : "Sem Registros"}]</h4></Accordion.Header>
                        <Accordion.Body>
                            {document[0]?.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Table striped bordered hover className='mt-2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DOCUMENTO</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {document.length > 0 ? document.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.nameDocument}</td>
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

export default GroupsDocuments;