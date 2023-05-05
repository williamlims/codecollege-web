import React, { useState } from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { Link  } from 'react-router-dom';
import { BsFillPersonFill, 
         BsFillBarChartFill,
         BsEaselFill, 
         BsFillJournalBookmarkFill,
         BsCaretRightSquare,
         BsJournals,
         BsPeopleFill,
         BsFiletypePdf
} from "react-icons/bs";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Outlet, useLocation }from "react-router-dom";
import "../../styles/style.css";

const verifyTitle = (pathname) => {
    if (pathname === '/admin/home/dashboard'){
        return 'Dashboard';
    } else if (pathname === '/admin/home/users'){
        return 'Usuários';
    } else if (pathname === '/admin/home/users/register'){
        return 'Novo Usuário';
    } else if (pathname === '/admin/home/courses'){
        return 'Cursos';
    } else if (pathname === '/admin/home/courses/register'){
        return 'Novo Curso';
    } else if (pathname === '/admin/home/courses/register/class'){
        return 'Nova Aula';
    } else if (pathname === '/admin/home/tutorials'){
        return 'Tutoriais';
    } else if (pathname === '/admin/home/tutorials/register'){
        return 'Novo Tutorial';
    } else if (pathname === '/admin/home/classes'){
        return 'Aulas';
    } else if (pathname === '/admin/home/classes/register'){
        return 'Nova Aula';
    } else if (pathname === '/admin/home/registers'){
        return 'Documentos';
    } else if (pathname === '/admin/home/registers/register'){
        return 'Novo Documento';
    } else if (pathname === '/admin/home/groups'){
        return 'Grupos';
    } else if (pathname === '/admin/home/groups/register'){
        return 'Novo Grupo';
    } else if (pathname.substring(0,23) === '/admin/home/users/edit/'){
        return 'Editar Usuário';
    }
};

function AdminRoot(props) {
    const location = useLocation();
    const { nodeRef } = location.pathname;
    const { toggleSidebar, broken } = useProSidebar();
    const [title, setTitle] = useState(verifyTitle(location.pathname));

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
            backgroundColor: '#474747',
            color: '#FFFFFF'
        }
    }
    return (
        <div style={{display: 'flex', height: '100%', flexDirection: 'row', direction: 'ltr'}}> 
            <Sidebar customBreakPoint="400px" rootStyles={{height: '100%', color:'#DBDBDB', fontFamily: 'Arial'}} backgroundColor='#2E332E'>
                <div onClick={() => toggleSidebar()} style={{marginLeft: 20}}>
                    <h2 className='mt-3'>Codecollege</h2>
                </div>
                <Menu>
                    <div style={{marginLeft:20}}>Administrativo</div> 
                    <MenuItem icon={<BsFillBarChartFill />} onClick={() => setTitle("Dashboard")} component={<Link to="/admin/home/dashboard" />}>DASHBOARD</MenuItem>
                    <SubMenu icon={<BsFillPersonFill />} rootStyles={style.menu} label="Usuário">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Usuários")} component={<Link to="/admin/home/users" />}> Usuários </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Novo Usuário")} component={<Link to="/admin/home/users/register" />}> Cadastro </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsEaselFill />} label="Curso">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Cursos")} component={<Link to="/admin/home/courses" />}> Cursos </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Novo Curso")} component={<Link to="/admin/home/courses/register" />}> Criar Curso </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Nova Aula")} component={<Link to="/admin/home/courses/register/class" />}> Criar Aula </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFillJournalBookmarkFill />} label="Tutorial">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Tutoriais")} component={<Link to="/admin/home/tutorials" />}> Tutoriais </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Novo Tutorial")} component={<Link to="/admin/home/tutorials/register" />}> Criar Tutorial </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsCaretRightSquare />} label="Aula Livre">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Aulas")} component={<Link to="/admin/home/classes" />}> Lista de Aulas </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Nova Aula")} component={<Link to="/admin/home/classes/register" />}> Criar Aula Livre </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsJournals />} label="Biblioteca">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Documentos")} component={<Link to="/admin/home/registers" />}> Registros </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Novo Documento")} component={<Link to="/admin/home/registers/register" />}> Criar Registro </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsPeopleFill />} label="Grupo">
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Grupos")} component={<Link to="/admin/home/groups" />}> Grupos </MenuItem>
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Novo Grupo")} component={<Link to="/admin/home/groups/register" />}> Novo Grupo </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFiletypePdf />} label="Relatório">
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/reports/users" />}> Usuários </MenuItem>
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/reports/courses" />}> Cursos </MenuItem>
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/reports/classes" />}> Aulas </MenuItem>
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/reports/documents" />}> Documentos </MenuItem>
                        <MenuItem rootStyles={style.subMenu} component={<Link to="/admin/home/reports/groups" />}> Grupos </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <main style={{width: '100%', height:'100%', backgroundColor: 'white',  overflow: 'auto' }}>
                <div style={{margin: 6  }}>
                    {broken && (
                    <Button variant='dark' className="sb-button" onClick={() => toggleSidebar()}>
                        Visualizar menu
                    </Button>
                    )}
                </div>
                <Navbar style={{backgroundColor: '#F2F2F2', margin: 10}}>
                    
                    <Container fluid>
                        <Navbar.Brand>{title}</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <DropdownButton
                                    key='start'
                                    id='dropdown'
                                    drop='start'
                                    variant="gray"
                                    title={` ${'Mark Antony'}`}
                                    >
                                    <Dropdown.Item eventKey="1" href="/home">Plataforma</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" href="/admin/home/users/register">Criar curso</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="3" onClick={() => {alert("mudar")}}>Sair</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container fluid >
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
    );
}

export default AdminRoot;