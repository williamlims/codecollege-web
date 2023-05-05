import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


function Dashboard() {

    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        ],
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} xs={12}>
                        <div>
                            <Bar data={data} />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xs={12}>
                        <div>
                            <Bar data={data} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;