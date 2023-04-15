import * as React from 'react';
import Container from 'react-bootstrap/Container';

function TabInfo(props) {
    return (
        <Container className="mt-2 p-2 shadow-sm" style={{color:'white', backgroundColor:'#456789', fontSize: 20, fontFamily: 'Arial'}}>
            <div style={{marginLeft:4}}>{props.info}</div>
        </Container>
    );
}

export default TabInfo;