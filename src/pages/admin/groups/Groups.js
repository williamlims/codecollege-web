import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import api from "../../../services/api";

const dadosTeste = [
    {id:'G2023R4O9U2P19I30D38C109T', grupo:'Contabilidade', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C110T', grupo:'Financeiro', assunto:'Trabalho', link:2},
    {id:'G2023R4O9U2P19I30D38C111T', grupo:'Produção', assunto:'Trabalho', link:3},
    {id:'G2023R4O9U2P19I30D38C112T', grupo:'Desenvolvimento', assunto:'Trabalho', link:4},
    {id:'G2023R4O9U2P19I30D38C113T', grupo:'Desenvolvimento', assunto:'Trabalho', link:5},
    {id:'G2023R4O9U2P19I30D38C114T', grupo:'Desenvolvimento', assunto:'Trabalho', link:6},
    {id:'G2023R4O9U2P19I30D38C115T', grupo:'Desenvolvimento', assunto:'Trabalho', link:7},
];

function Groups() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        api.get('/v1/groups/').then(res => {
            return setGroups(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);
    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>GRUPO</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {groups.length > 0 ? groups.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.idControl}</td>
                                        <td>{item.groupName}</td>
                                        <td>{item.subject}</td>
                                        <td align='center'>
                                            <SplitButton
                                                key={`end`}
                                                id={`dropdown-button-drop-end`}
                                                drop={`end`}
                                                variant="dark"
                                                title={` Ver `}
                                                >
                                                <Dropdown.Item eventKey="1" as={NavLink} to={`/admin/home/groups/users/`+item.idControl}>Usuários</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" as={NavLink} to={`/admin/home/groups/courses/`+item.idControl}>Cursos</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" as={NavLink} to={`/admin/home/groups/tutorials/`+item.idControl}>Tutoriais</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" as={NavLink} to={`/admin/home/groups/classes/`+item.idControl}>Aulas Livres</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" as={NavLink} to={`/admin/home/groups/documents/`+item.idControl}>Documentos</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="6" as={NavLink} to={`/admin/home/groups/edit/`+item.idControl}>Editar</Dropdown.Item>
                                            </SplitButton>
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

export default Groups;