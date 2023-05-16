import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo.svg';
import user from '../../assets/userMain.png';

function NavMain(props) {

    const getYearFunc = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    const getMonthFunc = () => {
        const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const date = new Date();
        let monthReturn = month[date.getMonth()];
        return monthReturn;
    }

    const getDayFunc = () => {
        let date = new Date();
        let day = date.getDate();
        if(day < 10){
            if(day === 1){
                day = "01";
            } else if (day === 2){
                day = "02";
            } else if (day === 3){
                day = "03";
            } else if (day === 4){
                day = "04";
            } else if (day === 5){
                day = "05";
            } else if (day === 6){
                day = "06";
            } else if (day === 7){
                day = "07";
            } else if (day === 8){
                day = "08";
            } else if (day === 9){
                day = "09";
            }
        }
        return day;
    }

    const getWeekDayFunc = () => {
        const day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        let date = new Date();
        let weekDay = day[date.getDay()];
        return weekDay;
    }
    return (
        <>
            <Navbar expand="md sm" as={Col} bg="light" style={{margin:0}} >
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                        <Navbar.Text className='h5 p-1' style={{fontFamily:'Rockwell', color:'black'}}>Code College</Navbar.Text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="user-config"/>
                    <Navbar.Collapse id="user-config" className="justify-content-end">
                        <Navbar.Text className='h5 m-1' style={{fontFamily:'Rockwell', color:'black'}}>
                            {props.nameUser} <a href="#l"><img src={user} width="35" height="35" className="rounded-circle" alt='Pho' /></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="dark" as={Col} className='shadow-sm' expand="md">      
                <Container>
                    <Navbar.Text as={Col}  className='h6 mt-1' style={{fontFamily:'Arial', color:'white'}}>
                        {getWeekDayFunc()}, {getDayFunc()} de {getMonthFunc()} de {getYearFunc()}<br />
                        <span className='h5'>Olá, {props.nameUser}! {props.messageUser}</span>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMain;