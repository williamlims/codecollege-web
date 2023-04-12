import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../../components/navbarlight/NavBarLight';

function Dashboard() {
    return (
        <>
            <NavBarLight />
            <Container >
                Dashboard
            </Container>
        </>
    );
}

export default Dashboard;