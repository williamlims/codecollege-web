import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';

function Login() {
    const style = {
        position: "center",
        align: "center",
        width: "250px",
        backgroundColor: "black"
    };
    return (
        <>
            <NavBarLight />
            <Container >
                olá
            </Container>
        </>
    );
}

export default Login;