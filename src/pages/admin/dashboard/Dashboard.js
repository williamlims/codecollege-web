import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavBarLight from '../../../components/navbarlight/NavBarLight';
import api from '../../../services/api';


function Dashboard() {

    const getData = async ()  => {
        let dados = await api.get("/v1/users")
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
        });
        return dados;
    }

    return (
        <>
            <NavBarLight />
            <Container >
                Dashboard
                <div>{getData().data}</div>
            </Container>
        </>
    );
}

export default Dashboard;