import React from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsFillBoxFill, BsPeopleFill } from "react-icons/bs";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Outlet, useLocation }from "react-router-dom";
import "../../styles/style.css";

function AdminRoot() {
    const location = useLocation();
    const { nodeRef } = location.pathname;
    const { toggleSidebar, broken } = useProSidebar();
    return (
        <div style={{display: 'flex', height: '100%', flexDirection: 'column', direction: 'ltr', backgroundColor:'black'}}> 
        <div style={{display: 'flex', height: '100%', backgroundColor:'black'}}>
            <div md={2} style={{float: 'left'}}>
            <Sidebar customBreakPoint="400px" rootStyles={{height: '100%', color:'white', fontFamily: 'Arial'}} backgroundColor='black'>
                <div onClick={() => toggleSidebar()} style={{marginLeft: 20}}>
                <h2>Menu</h2>
                </div>
                <Menu>
                <div style={{marginLeft:20}}>Administrativo</div> 
                <SubMenu active icon={<BsPeopleFill />} label="Usuários">
                <MenuItem  rootStyles={{height: '100%', color:'black'}}> Lista de Usuários </MenuItem>
                <MenuItem  rootStyles={{height: '100%', color:'black'}}> Cadastro </MenuItem>
                </SubMenu>
                <SubMenu icon={<BsFillBoxFill />} label="Estoque">
                <MenuItem> Lista de Itens </MenuItem>
                <MenuItem> Cadastro </MenuItem>
                </SubMenu>
                </Menu>
            </Sidebar>
            </div>
            <main className='container scroll' style={{width: '100%', height:'100%', backgroundColor: 'white', padding: 0, margin: 0, position: 'static', overflow: 'auto' }}>
            <div style={{margin: 6  }}>
                {broken && (
                <Button variant='dark' className="sb-button" onClick={() => toggleSidebar()}>
                    Visualizar menu
                </Button>
                )}
            </div>
            <Navbar bg="dark" style={{height: '60px', backgroundColor: 'gray', margin: 6  }}>
                <Nav>
                Teste
                </Nav>
            </Navbar>
            <Container>
                <SwitchTransition>
                    <CSSTransition nodeRef={nodeRef} key={location.pathname}  timeout={600} classNames="page" unmountOnExit>
                        <div className="page">
                            {<Outlet />}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </Container>
            </main>
        </div>
        </div>
    );
}

export default AdminRoot;
