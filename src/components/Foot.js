
import './Body.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Foot(){
    return(
    <div className='foot'>
        <Row className='lastfoot'>
            <p id="nin">© 2021 Nintendo. Games are property of their respective owners.</p>
            <p>Nintendo of America Inc. | Headquarters are in Redmond, Washington, USA | Support</p>
            <div className='foot-menu'>
                <Row>
                    <Col sm={1}><img src="/images/logo-nin.png"/></Col>
                    <Col sm={2}>Company Information</Col>
                    <Col sm={1}>Career</Col>
                    <Col sm={1}>Contact</Col>
                    <Col sm={3}></Col>
                    <Col sm={1}>Privacy Policy</Col>
                    <Col sm={1}>Terms of Sale</Col>
                    <Col sm={2}>© 2021 Nintendo.</Col>
                </Row>
                
            </div>
        </Row>
    </div>
    );
}

export default Foot;