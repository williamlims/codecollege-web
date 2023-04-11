import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import { useParams } from "react-router-dom";

function Confirmation() {
    let { id } = useParams();
    return (
        <>
            <NavBarLight />
            <Container >
                Confirmation: The id is = {id}
            </Container>
        </>
    );
}

export default Confirmation;