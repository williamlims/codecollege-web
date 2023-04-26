import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
import BreadcrumbPath from '../../../../components/pathNavigation/BreadcrumbPath';
import TabInfo from '../../../../components/tab/TabInfo';
import NavMain from '../../../../components/navMain/NavMain';
import Footer from '../../../../components/footer/Footer';

function Account() {
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
            <NavMain nameUser="Marcos Luiz" messageUser="Efetue alterações em sua conta."/>
            <BreadcrumbPath path={path.element}/>
            <TabInfo info="Conta"/>
            <main class="flex-shrink-0">
                <Container className='mb-5 mt-2 bg-light shadow' style={{height:600}}>
                    <br />
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <div style={styles.textTop}>Dados</div>
                    </Row>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <div style={styles.textoDados}>
                            Dados do usuário aqui ....                        
                        </div>
                    </Row>
                    <Row className="mb-4" style={styles.marginsFildes}>
                        <Button variant="danger" style={{marginLeft:10}} as={Col} md={2} lg={2} sm={2} type="submit" >
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