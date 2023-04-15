import * as React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className='footer mt-5 py-3 bg-dark text-center' >
            <Container className='mt-5 pt-5'>
                <span className='text-muted'>Copyright © Todos os direitos Reservados 2023</span>
            </Container>
        </footer>
    );
}

export default Footer;