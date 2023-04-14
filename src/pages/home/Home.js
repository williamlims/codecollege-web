import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavMain from '../../components/navMain/NavMain';

function Home() {
    return (
        <>
            <NavMain nameUser="Marcos Luiz"/>
            <Container >
                Home
            </Container>
        </>
    );
}

export default Home;