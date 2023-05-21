import React, { useState, useEffect } from 'react';
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
         BsFiletypePdf,
         BsDownload
} from "react-icons/bs";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Outlet, useLocation, useNavigate }from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../styles/style.css";
import { jsPDF } from "jspdf";
import api from "../../services/api";

const printUserReport = (user) => {
    const doc = new jsPDF();
    let counter = 0;
    let space = 30;
    let page = 1;
    let totalpage = user.length;

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("RELATÓRIO DE USUÁRIOS", 15, 15);
    doc.setFontSize(12);
    doc.text("ID", 15, 25);
    doc.text("| NOME", 70, 25);
    doc.text("| EMAIL", 105, 25);
    doc.text("| DATA INSCRIÇÃO", 155, 25);
    doc.setFont("times", "normal");
    doc.setFontSize(10);

    if(totalpage === 0){
        doc.text(("Sem registros!").substring(0,30), 15, space);
        doc.save("user-report.pdf");
    }

    for(counter; counter<totalpage; counter++){ 
        doc.text((user[counter]?.idControl).substring(0,30), 15, space);
        doc.text(("  "+user[counter]?.firstName+" "+user[counter]?.lastName).substring(0,21), 70, space);
        doc.text(("  "+user[counter]?.email).substring(0,28), 105, space);
        doc.text("  "+user[counter]?.createdAt, 155, space);
        space = space + 5;
        if(counter === 50){
            doc.addPage(page);
            page = page + 1;
            space = 30;
            totalpage = totalpage - 50;
        }
    }
    doc.save("user-report.pdf");
};

const printCourseReport = (course) => {
    const doc = new jsPDF();
    let counter = 0;
    let space = 30;
    let page = 1;
    let totalpage = course.length;

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("RELATÓRIO DE CURSOS", 15, 15);
    doc.setFontSize(12);
    doc.text("ID", 15, 25);
    doc.text("| CURSO", 70, 25);
    doc.text("| NÍVEL", 120, 25);
    doc.text("| ÁREA", 155, 25);
    doc.setFont("times", "normal");
    doc.setFontSize(10);

    if(totalpage === 0){
        doc.text(("Sem registros!").substring(0,30), 15, space);
        doc.save("course-report.pdf");
    }

    for(counter; counter<totalpage; counter++) { 
        doc.text((course[counter]?.idControl).substring(0,30), 15, space);
        doc.text(("  "+course[counter]?.nameCourse).substring(0,30), 70, space);
        doc.text(("  "+course[counter]?.level).substring(0,28), 120, space);
        doc.text("  "+course[counter]?.area, 155, space);
        space = space + 5;
        if(counter === 50){
            doc.addPage(page);
            page = page + 1;
            space = 30;
            totalpage = totalpage - 50;
        }
    }
    doc.save("course-report.pdf");
};

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
    } else if (pathname === '/admin/home/courses/classes'){
        return 'Aulas';
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
    } else if (pathname === '/admin/home/groups/insert'){
        return 'Inserir no Grupo';
    } else if (pathname.substring(0,23) === '/admin/home/users/edit/'){
        return 'Editar Usuário';
    } else if (pathname.substring(0,25) === '/admin/home/courses/edit/'){
        return 'Editar Curso';
    } else if (pathname.substring(0,33) === '/admin/home/courses/classes/edit/'){
        return 'Editar Aula';
    } else if (pathname.substring(0,27) === '/admin/home/tutorials/edit/'){
        return 'Editar Tutorial';
    } else if (pathname.substring(0,25) === '/admin/home/classes/edit/'){
        return 'Editar Aula';
    } else if (pathname.substring(0,27) === '/admin/home/registers/edit/'){
        return 'Editar Documento';
    } else if (pathname.substring(0,25) === '/admin/home/groups/users/'){
        return 'Usuários no Grupo';
    } else if (pathname.substring(0,27) === '/admin/home/groups/courses/'){
        return 'Cursos no Grupo';
    } else if (pathname.substring(0,29) === '/admin/home/groups/tutorials/'){
        return 'Tutoriais no Grupo';
    } else if (pathname.substring(0,27) === '/admin/home/groups/classes/'){
        return 'Aulas Livres no Grupo';
    } else if (pathname.substring(0,29) === '/admin/home/groups/documents/'){
        return 'Documentos no Grupo';
    }
};

function AdminRoot(props) {
    let navigate = useNavigate();
    const location = useLocation();
    const { nodeRef } = location.pathname;
    const { toggleSidebar, broken } = useProSidebar();
    const [title, setTitle] = useState("");
    const [user, setUser] = useState([]);
    const [course, setCourse] = useState([]);

    const [userID, setUserID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [levelUser, setLevelUser] = useState('');
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClose = () => setDeleteShow(false);
    const handleShow = () => setDeleteShow(true);

    useEffect(() => {
        setTitle(verifyTitle(location.pathname));
    }, []);

    const logoutAdmin = () => {
        sessionStorage.clear();
        navigate('/admin');
    }

    useEffect(() => {
        if(sessionStorage.getItem("idUser") === null && sessionStorage.getItem("idUser") !== 2){
            navigate('/admin');
        } else {
            setUserID(sessionStorage.getItem("idUser"));
            setFirstName(sessionStorage.getItem("firstName"));
            setLastName(sessionStorage.getItem("lastName"));
            setLevelUser(sessionStorage.getItem("levelUser"));
        }
    }, []);

    useEffect(() => {
        api.get('/v1/users/').then(res => {
            return setUser(res.data);
        }).catch(error => {
            alert(error);
        });

        api.get('/v1/courses/').then(res => {
            return setCourse(res.data);
        }).catch(error => {
            alert(error);
        });
    }, []);

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
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Aulas")} component={<Link to="/admin/home/courses/classes" />}> Aulas </MenuItem>
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
                        <MenuItem rootStyles={style.subMenu} onClick={() => setTitle("Inserir no Grupo")} component={<Link to="/admin/home/groups/insert" />}> Inserir no Grupo </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BsFiletypePdf />} label="Relatório">
                        <MenuItem rootStyles={style.subMenu} icon={<BsDownload />} onClick={() => printUserReport(user)}> Usuários </MenuItem>
                        <MenuItem rootStyles={style.subMenu} icon={<BsDownload />} onClick={() => printCourseReport(course)}> Cursos </MenuItem>
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
                                    title={` ${firstName} ${lastName}`}
                                    >
                                    <Dropdown.Item eventKey="1" href="/home">Plataforma</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" href="/admin/home/users/register">Criar curso</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="3" onClick={() => handleShow()}>Sair</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container fluid >
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
                        <Button variant="danger" onClick={() => logoutAdmin()}>Sim</Button>
                        </Modal.Footer>
                    </Modal>
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