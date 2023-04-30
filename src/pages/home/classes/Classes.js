import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';
import user from '../../../assets/userMain.png';
import Button from 'react-bootstrap/Button';


function Classes() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item><Nav.Link to="/home" key="home" as={NavLink}>Home</Nav.Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Aulas livres</Breadcrumb.Item>
            </>
        )
    };
    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Nessa página você tem acesso às aulas livres."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Aulas livres"/>
            <Container style={{height:600}} className=' shadow-sm overflow-auto'>
                <Row className='shadow-sm mt-2 p-2'>
                    <Col sm={3} xs={2} md={2} lg={2} xl={1} className='d-flex align-items-center'>
                        <img src={user} width="80" height="80" 
                                style={{borderBlockColor:'black'}} className=" shadow-sm d-inline-block align-top" alt="pho" />
                    </Col>
                    <Col sm={5} xs={12} md={6} lg={6} xl={6} className='text-break m-2 p-1'>
                        <span style={{fontFamily:'Arial Black', fontSize: 16}}>Nome da aula </span> < br/> 
                        <span style={{fontFamily:'Arial', fontSize: 14}}>fdadfb dbdbdhrehe hrheherhe rhreherhrehe herheherher hehr eherhr eherh shdf hdddgf gsdgf dsgfsdgd sfgsd gfdgd fsg khj jh gjhf gdf gd dfg dfdfd fdfdf dfdfd </span>
                    </Col>
                    <Col sm={3} xs={4} md={4} lg={3} xl={3} className='m-2 p-1 d-flex align-items-center'>
                        <Button as={NavLink} to="/home/courses/5" variant="primary">
                            Assistir aula
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Classes;