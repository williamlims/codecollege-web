import React from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link  } from 'react-router-dom';
import { BsFillPersonFill, 
         BsFillBarChartFill,
         BsFillPlayBtnFill, 
         BsFillJournalBookmarkFill,
         BsCaretRightSquare,
         BsJournals,
         BsPeopleFill,
         BsFiletypePdf
} from "react-icons/bs";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Outlet, useLocation }from "react-router-dom";
import "../../styles/style.css";

function AdminRoot() {
    const location = useLocation();
    const { nodeRef } = location.pathname;
    const { toggleSidebar, broken } = useProSidebar();
    const style = {
        menu: {
            '& > .': { backgroundColor:'#2E332E',
                '&:hover':{
                    backgroundColor: '#001C0A',
                    color: '#DBDBDB'
                },
            }
        },
        subMenu:{
            backgroundColor: '#D9EDFF',
            color: '#4E555C'
        }
    }
    return (
        <div style={{display: 'flex', height: '100%', flexDirection: 'column', direction: 'ltr'}}> 
        <div style={{display: 'flex', height: '100%'}}>
            <div md={2} style={{float: 'left'}}>
            <Sidebar customBreakPoint="400px" rootStyles={{height: '100%', color:'#DBDBDB', fontFamily: 'Arial'}} backgroundColor='#2E332E'>
                <div onClick={() => toggleSidebar()} style={{marginLeft: 20}}>
                    <h2 className='mt-3'>Codecollege</h2>
                </div>
                <Menu>
                    <div style={{marginLeft:20}}>Administrativo</div> 
                    <MenuItem icon={<BsFillBarChartFill />} component={<Link to="/admin/home/dashboard" />}>DASHBOARD</MenuItem>
                    <SubMenu defaultOpen icon={<BsFillPersonFill />} rootStyles={style.menu} label="Usuário">
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/users" />}> Usuários </MenuItem>
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/users/register" />}> Cadastro </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFillPlayBtnFill />} label="Curso">
                        <MenuItem component={<Link to="/admin/home/courses" />}> Cursos </MenuItem>
                        <MenuItem component={<Link to="/admin/home/courses/register" />}> Criar Curso </MenuItem>
                        <MenuItem component={<Link to="/admin/home/courses/register/class" />}> Criar Aula </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFillJournalBookmarkFill />} label="Tutorial">
                        <MenuItem component={<Link to="/admin/home/tutorials" />}> Tutoriais </MenuItem>
                        <MenuItem component={<Link to="/admin/home/tutorials/register" />}> Criar Tutorial </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsCaretRightSquare />} label="Aula Livre">
                        <MenuItem component={<Link to="/admin/home/classes" />}> Lista de Aulas </MenuItem>
                        <MenuItem component={<Link to="/admin/home/classes/register" />}> Criar Aula Livre </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsJournals />} label="Biblioteca">
                        <MenuItem component={<Link to="/admin/home/registers" />}> Registros </MenuItem>
                        <MenuItem component={<Link to="/admin/home/registers/register" />}> Criar Registro </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsPeopleFill />} label="Grupo">
                        <MenuItem component={<Link to="/admin/home/groups" />}> Grupos </MenuItem>
                        <MenuItem component={<Link to="/admin/home/groups/register" />}> Novo Grupo </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFiletypePdf />} label="Relatório">
                        <MenuItem component={<Link to="/admin/home/reports/users" />}> Usuários </MenuItem>
                        <MenuItem component={<Link to="/admin/home/reports/courses" />}> Cursos </MenuItem>
                        <MenuItem component={<Link to="/admin/home/reports/classes" />}> Aulas </MenuItem>
                        <MenuItem component={<Link to="/admin/home/reports/documents" />}> Documentos </MenuItem>
                        <MenuItem component={<Link to="/admin/home/reports/groups" />}> Grupos </MenuItem>
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
                    <Nav style={{marginLeft: 20, color: 'white'}}>
                    Teste
                    </Nav>
                </Navbar>
                <Container>
                    <SwitchTransition>
                        <CSSTransition nodeRef={nodeRef} key={location.pathname} timeout={600} classNames="page" unmountOnExit>
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
