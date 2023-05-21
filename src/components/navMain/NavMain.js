import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NavMain(props) {
    let navigate = useNavigate();
    const [userID, setUserID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [levelUser, setLevelUser] = useState('');
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClose = () => setDeleteShow(false);
    const handleShow = () => setDeleteShow(true);

    const logoutUser = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        if(sessionStorage.getItem("idUser") === null){
            navigate('/login');
        } else {
            setUserID(sessionStorage.getItem("idUser"));
            setFirstName(sessionStorage.getItem("firstName"));
            setLastName(sessionStorage.getItem("lastName"));
            setLevelUser(sessionStorage.getItem("levelUser"));
        }
    }, []);
        
    const getYearFunc = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    const getMonthFunc = () => {
        const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const date = new Date();
        let monthReturn = month[date.getMonth()];
        return monthReturn;
    }

    const getDayFunc = () => {
        let date = new Date();
        let day = date.getDate();
        if(day < 10){
            if(day === 1){
                day = "01";
            } else if (day === 2){
                day = "02";
            } else if (day === 3){
                day = "03";
            } else if (day === 4){
                day = "04";
            } else if (day === 5){
                day = "05";
            } else if (day === 6){
                day = "06";
            } else if (day === 7){
                day = "07";
            } else if (day === 8){
                day = "08";
            } else if (day === 9){
                day = "09";
            }
        }
        return day;
    }

    const getWeekDayFunc = () => {
        const day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        let date = new Date();
        let weekDay = day[date.getDay()];
        return weekDay;
    }
    return (
        <>
            <Navbar expand="md sm" as={Col} bg="light" style={{margin:0}} >
                <Container>
                    <Modal
                        show={deleteShow}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Confirmação</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Você tem certeza que deseja sair da plataforma?
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            não
                        </Button>
                        <Button variant="danger" onClick={() => logoutUser()}>Sim</Button>
                        </Modal.Footer>
                    </Modal>
                    <Navbar.Brand href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                        <Navbar.Text className='h5 p-1' style={{fontFamily:'Rockwell', color:'black'}}>Code College</Navbar.Text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="user-config"/>
                    <Navbar.Collapse id="user-config" className="justify-content-end">
                        <Navbar.Text className='m-1' style={{fontFamily:'Rockwell', color:'black'}}>
                            <DropdownButton
                                    key='start'
                                    id='dropdown'
                                    drop='start'
                                    variant="gray"
                                    title={` ${firstName} ${lastName}`}
                                    >
                                    <Dropdown.Item eventKey="1" href="/home/courses">Cursos</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" href="/home/certificates">Certificados</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="3" onClick={() => handleShow()}>Sair</Dropdown.Item>
                                </DropdownButton>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="dark" as={Col} className='shadow-sm' expand="md">      
                <Container>
                    <Navbar.Text as={Col}  className='h6 mt-1' style={{fontFamily:'Arial', color:'white'}}>
                        {getWeekDayFunc()}, {getDayFunc()} de {getMonthFunc()} de {getYearFunc()}<br />
                        <span className='h5'>Olá, {firstName}! {props.messageUser}</span>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMain;