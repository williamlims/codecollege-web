import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';

function Home() {
    return (
        <>
            <NavBarLight />
            <Container >
                Home
            </Container>
        </>
    );
}

export default Home;