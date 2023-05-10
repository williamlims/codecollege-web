import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const dadosTeste = [
    {id:'G2023R4O9U2P19I30D38C109T', grupo:'Contabilidade', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C110T', grupo:'Financeiro', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C111T', grupo:'Produção', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C112T', grupo:'Desenvolvimento', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C113T', grupo:'Desenvolvimento', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C114T', grupo:'Desenvolvimento', assunto:'Trabalho', link:1},
    {id:'G2023R4O9U2P19I30D38C115T', grupo:'Desenvolvimento', assunto:'Trabalho', link:1},
];

function GroupsUsers() {
    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>Contabilidade [Trabalho]</h4></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Table striped bordered hover className='mt-2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>GRUPO</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.grupo}</td>
                                        <td>{item.assunto}</td>
                                        <td align='center'>
                                            <Button variant='danger' as={NavLink} to={item.link}>Remover</Button>
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

export default GroupsUsers;