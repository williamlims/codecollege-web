import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const dadosTeste = [
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Marcos', email:'marcosmg@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Felipe', email:'felipesm@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Marina', email:'marinarij@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Jóice', email:'jojotto@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Matheus', email:'matthokl@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Karine', email:'karinebr20@gmail.com', link:1},
    {id:'U2023S4O9E2R19I30D38C109T', nome:'Flávia', email:'flafla2088@gmail.com', link:1},
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
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
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