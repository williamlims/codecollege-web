import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../components/tab/TabInfo';
import NavMain from '../../../components/navMain/NavMain';
import Footer from '../../../components/footer/Footer';

import { BsFillPersonVcardFill, 
         BsGearFill
} from "react-icons/bs";

function Preferences() {
    const path = { 
        element: (
            <>
                <Breadcrumb.Item to="/home" key="/home" as={NavLink} href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Preferências</Breadcrumb.Item>
            </>
        )
    }

    const borderSizeStyle = {
        borderRadius:0, 
        height:230
    }

    return (
        <>
            <NavMain nameUser="Marcos Luiz" messageUser="Efetue alterações em sua conta."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Preferências"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow' style={{height:600}}>
                    <Row>
                        <Col xs={12} sm={6} md={3} lg={3} className="p-2 mb-3">
                            <Nav.Link to="/home/preferences/profile" key="/home/preferences/profile" as={NavLink}>
                                <Col className="w-100 p-2 shadow" variant="primary" as={Button} style={borderSizeStyle}>
                                    <div>
                                        <p style={{fontSize:26}}>Perfil <BsFillPersonVcardFill /></p>
                                        <p style={{fontSize:18}}>Realizar alterações no perfil</p>
                                    </div>
                                </Col>
                            </Nav.Link>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className="p-2 mb-3">
                            <Nav.Link to="/home/preferences/account" key="/home/preferences/account" as={NavLink}>
                                <Col className="w-100 p-2 shadow" variant="success" as={Button} style={borderSizeStyle}>
                                    <div>
                                        <p style={{fontSize:26}}>Conta <BsGearFill /></p>
                                        <p style={{fontSize:18}}>Acessar opções da conta</p>
                                    </div>
                                </Col>
                            </Nav.Link>
                        </Col>
                    </Row> 
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Preferences;