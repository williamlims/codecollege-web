import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const dadosTeste = [
    {id:'T2023U4T9O2R10I4A44L78', curso:'Programação Java', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Lógica de Programação', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Negócios', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Marketing', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Inglês Instrumental', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Regras de Negócios', area:'Ciências Exatas e da Terra', link:1},
    {id:'T2023U4T9O2R10I4A44L78', curso:'Data Science', area:'Ciências Exatas e da Terra', link:1},
];

function GroupsCourses() {
    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>Desenvolvimento [Trabalho]</h4></Accordion.Header>
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
                            <th>CURSO</th>
                            <th>ÁREA</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.curso}</td>
                                        <td>{item.area}</td>
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

export default GroupsCourses;