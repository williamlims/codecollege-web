import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../../components/tab/TabInfo';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';
import api from "../../../../services/api";

function Account() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClose = () => setDeleteShow(false);
    const handleShow = () => setDeleteShow(true);

    const idUser = sessionStorage.getItem("idUser");

    useEffect(() => {
        api.get(`/v1/users/${idUser}`).then(res => {
            return setUser(res.data);
        }).catch(error => {
            alert(error);
        });
    }, [idUser]);

    const deleteUser = () => {
        api.delete(`/v1/users/${idUser}`).then(res => {
            setDeleteShow(false);
            navigate('/login');
        }).catch(error => {
            return error;
        });
    };

    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item as={NavLink} to="/home/preferences" key="/home/preferences" href="/home/preferences">Preferências</Breadcrumb.Item>
                <Breadcrumb.Item active>Conta</Breadcrumb.Item>
            </>
        )
    };
    const styles = {
        textTop: {
            fontFamily:'Arial',
            fontSize: 20,
            color: 'black'
        },
        marginsFildes: {
            marginLeft:15, 
            marginRight:15
        },
        textoDados: {
            fontFamily:'Arial',
            fontSize: 16,
            color: 'black'
        }
    };
    return (
        <>
            <NavMain messageUser="Efetue alterações em sua conta."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Conta"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow' style={{height:600}}>
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
                        Você tem certeza que deseja excluir a sua conta?
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => deleteUser()}>Exluir</Button>
                        </Modal.Footer>
                    </Modal>
                    <br />
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <div style={styles.textTop}>Dados</div>
                    </Row>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <div style={styles.textoDados}>
                            ID: {user?.idControl} <br />  
                            Nome: {user?.firstName} {user?.lastName}  <br />
                            Email: {user?.email} <br />  
                            Data de Nascimento: {user?.birthday} <br />                       
                        </div>
                    </Row>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Button variant="danger" style={{marginLeft:10}} onClick={() => handleShow()} as={Col} md={2} lg={2} sm={2} type="submit" >
                            Excluir conta
                        </Button>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Account;