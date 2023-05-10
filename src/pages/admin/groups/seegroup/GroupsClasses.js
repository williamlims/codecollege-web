import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const dadosTeste = [
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Introdução', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Primeiros Passos', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Análise de código', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Design', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Matemmática Avançada', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Objetos Compostos', assunto:'Programação Java', link:1},
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Dados em Escala', assunto:'Programação Java', link:1},
];

function GroupsClasses() {
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
                            <th>AULA</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.aula}</td>
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

export default GroupsClasses;