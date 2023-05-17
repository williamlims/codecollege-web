import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import api from "../../../services/api";

const dadosTeste = [
    {id:'F2023R4E9E2C16L20A36S674S', aula:'Introdução', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/1'},
    {id:'F2023R4E9E2C16L20A36S675S', aula:'Primeiros Passos', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/2'},
    {id:'F2023R4E9E2C16L20A36S676S', aula:'Análise de código', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/3'},
    {id:'F2023R4E9E2C16L20A36S677S', aula:'Design', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/4'},
    {id:'F2023R4E9E2C16L20A36S678S', aula:'Matemmática Avançada', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/5'},
    {id:'F2023R4E9E2C16L20A36S679S', aula:'Objetos Compostos', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/6'},
    {id:'F2023R4E9E2C16L20A36S680S', aula:'Dados em Escala', nivel:'Avançado', assunto:'Programação Java', link:'/admin/home/classes/edit/7'},
];

function ClassesList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        api.get('/v1/freeclasses/').then(res => {
            return setClasses(res.data);
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
                            <th>AULA</th>
                            <th>NÍVEL</th>
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
                                        <td>{renderSwitchLevel(item.level)}</td>
                                        <td>{renderSwitchSubject(item.subject)}</td>
                                        <td align='center'><Button variant='dark' as={NavLink} to={`/admin/home/classes/edit/${item.idControl}`}>Editar</Button></td>
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

export default ClassesList;