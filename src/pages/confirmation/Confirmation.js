import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../components/navbarlight/NavBarLight';
import { useParams } from "react-router-dom";

function Confirmation() {
    let { id } = useParams();
    id = (id*1) + 2;
    return (
        <>
            <NavBarLight />
            <Container className="mt-5 shadow" style={{  borderRadius: 10}}>
                Confirmation: The id is = {id}
            </Container>
        </>
    );
}

export default Confirmation;