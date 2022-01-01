import './Body.css';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {BsCart2, BsPersonCircle} from 'react-icons/bs'
import{FaHeart }from 'react-icons/fa'

function AppHeader(){
  
    return(
        <Navbar>
      
            <Container className="App-header">
            <Navbar.Brand href="#home"><img src="/images/logo-nin.png"/></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
                <Nav.Link className='cart'><BsCart2 className='BSicon'/>Cart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='cart'><FaHeart className='icon'/>Wish List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='login'><BsPersonCircle className='icon'/>Login/Register</Nav.Link>
                </Nav.Item>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default AppHeader;