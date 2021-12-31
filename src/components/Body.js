import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './Body.css';
import BodyNews from './Body-news'



function BodyPage(){
  return(
    <Container >
      <div className="Body">
      
          <Row>
            <Col sm={2}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="disabled" disabled>
                  PLATFORM
                </Nav.Link>
                <Nav.Link className="plat"><img src="/images/switch-logo.png"/></Nav.Link>
                <Nav.Link className="plat"><img src="/images/Wii_logo.png"/></Nav.Link>
                <Nav.Link className="plat"><img src="/images/3ds_logo.jpg"/></Nav.Link>

                <Nav.Link eventKey="disabled" disabled>
                  CATEGORIES
                </Nav.Link>
                <Nav.Link className="Nav">News</Nav.Link>
                <Nav.Link className="Nav">Deals</Nav.Link>
                <Nav.Link className="Nav">New Releases</Nav.Link>
                <Nav.Link className="Nav">Coming Soon</Nav.Link>
                <Nav.Link className="Nav">Most Popular</Nav.Link>

                <Nav.Link eventKey="disabled" disabled>
                  GENRES
                </Nav.Link>
                <Nav.Link className="Nav">Actions</Nav.Link>
                <Nav.Link className="Nav">Adventure</Nav.Link>
                <Nav.Link className="Nav">Arcade</Nav.Link>
                <Nav.Link className="Nav">Fighting</Nav.Link>
                <Nav.Link className="Nav">Health & Fitness</Nav.Link>
                <Nav.Link className="Nav">Music</Nav.Link>
                <Nav.Link className="Nav">Party</Nav.Link>
                <Nav.Link className="Nav">Platformer</Nav.Link>
                <Nav.Link className="Nav">Puzzle</Nav.Link>
                <Nav.Link className="Nav">Racing</Nav.Link>
                <Nav.Link className="Nav">RPG</Nav.Link>
                <Nav.Link className="Nav">Shooter</Nav.Link>
                <Nav.Link className="Nav">Simulation</Nav.Link>
                <Nav.Link className="Nav">Sports</Nav.Link>
                <Nav.Link className="Nav">Strategy</Nav.Link>

                <Nav.Link eventKey="disabled" disabled>
                  MULTIPLAYER
                </Nav.Link>
                <Nav.Link className="Nav">Local Co-op</Nav.Link>
                <Nav.Link className="Nav">Online Co-op</Nav.Link>
                <Nav.Link className="Nav">Local Multiplayer</Nav.Link>
                <Nav.Link className="Nav">Online Multiplayer</Nav.Link>
      
              </Nav>
            </Col>
            <Col sm={10}>
              <div>
                <Form className="Searchbar d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search for a game..."
                    className="me-2"
                    aria-label="Search"
                  />
                 
                </Form>

                <BodyNews/>
               
              </div>
            </Col>
          </Row>
      
      </div>
    </Container>
  );
}
export default BodyPage;