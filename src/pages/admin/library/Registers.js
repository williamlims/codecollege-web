import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import api from "../../../services/api";

function Registers() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        api.get('/v1/libraries/').then(res => {
            return setLibrary(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

    const renderSwitchLevel = (level) => {
        switch(level) {
            case 1:
                return 'Iniciante';
            case 2:
                return 'Intermediário';
            case 3:
                return 'Avançado';
            case 4:
                return 'Especialista';
            default:
                return 'Error';
        }
    }

    const renderSwitchSubject = (subject) => {
        switch(subject) {
            case 1:
                return 'Tecnologia';
            case 2:
                return 'Administração';
            case 3:
                return 'Contabilidade';
            case 4:
                return 'Finanças';
            case 5:
                return 'Indústria';
            case 6:
                return 'Medicina';
            case 7:
                return 'Comunicação';
            case 8:
                return 'Outro';
            default:
                return 'Error';
        }
    }

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
                        {library.length > 0 ? library.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.nameDocument}</td>
                                        <td>{renderSwitchLevel(item.level)}</td>
                                        <td>{renderSwitchSubject(item.subject)}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={`/admin/home/registers/edit/${item.idControl}`}>Editar</Button></td>
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

export default Registers;