import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const dadosTeste = [
    {id:'T2023U4T9O2R10I4A44L78', tutorial:'Programação Java', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/1'},
    {id:'T2023U4T9O2R10I4A44L79', tutorial:'Lógica de Programação', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/2'},
    {id:'T2023U4T9O2R10I4A44L80', tutorial:'Negócios', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/3'},
    {id:'T2023U4T9O2R10I4A44L81', tutorial:'Marketing', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/4'},
    {id:'T2023U4T9O2R10I4A44L82', tutorial:'Inglês Instrumental', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/5'},
    {id:'T2023U4T9O2R10I4A44L83', tutorial:'Regras de Negócios', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/6'},
    {id:'T2023U4T9O2R10I4A44L84', tutorial:'Data Science', nivel:'Iniciante', assunto:'Tecnologia', link:'/admin/home/tutorials/edit/7'},
];

function TutorialsList() {
    return (
        <>
            <Container fluid className='p-2 shadow-sm'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TUTORIAL</th>
                            <th>NÍVEL</th>
                            <th>ASSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosTeste.map( (item) => {
                            return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.tutorial}</td>
                                        <td>{item.nivel}</td>
                                        <td>{item.assunto}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={item.link}>Editar</Button></td>
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

export default TutorialsList;