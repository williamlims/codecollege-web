import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
                        
                        {dadosTeste.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.grupo}</td>
                                        <td>{item.assunto}</td>
                                        <td align='center'>
                                            <SplitButton
                                                key={`end`}
                                                id={`dropdown-button-drop-end`}
                                                drop={`end`}
                                                variant="dark"
                                                title={` Ver `}
                                                >
                                                <Dropdown.Item eventKey="1" as={NavLink} to={`/admin/home/groups/users/`+item.link}>Usuários</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" as={NavLink} to={`/admin/home/groups/courses/`+item.link}>Cursos</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" as={NavLink} to={`/admin/home/groups/tutorials/`+item.link}>Tutoriais</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" as={NavLink} to={`/admin/home/groups/classes/`+item.link}>Aulas Livres</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" as={NavLink} to={`/admin/home/groups/documents/`+item.link}>Documentos</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="6" as={NavLink} to={`/admin/home/groups/edit/`+item.link}>Editar</Dropdown.Item>
                                            </SplitButton>
                                        </td>
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

export default Groups;