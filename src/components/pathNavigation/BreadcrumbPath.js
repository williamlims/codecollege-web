import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbPath(props) {
  return (
    <Container className='shadow-sm mt-1 bg-light' style={{height:30}}>
        <Breadcrumb>
            {props.path}
        </Breadcrumb>
    </Container>
  );
}

export default BreadcrumbPath;