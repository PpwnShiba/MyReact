import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import GameList from '../data/GameList'
import GameItem from './GameItems'
import CoverHomePic from '../data/cover-home2'

function CoverHome(){
    const GameElements1 = GameList.map((game, index) =>{
        return <GameItem key={index} game={game} />;
    });
    const GameElements2 = CoverHomePic.map((game, index) =>{
        return <GameItem key={index} game={game} />;
    });
    return(
        <Container>
            <Row>
                <Col sm={4} className="Text-home">
                    <h1>Nintendo eShop</h1>
                    <p>Visit the gamepages on this website to purchase and dowload games directly yo your systems!</p>
                
                </Col>
                <Col sm={8}>
                    <div className="App-grid">
                        {GameElements1}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="App-grid">
                        {GameElements2}
                    </div>
                </Col>
            </Row>           
        </Container>
    );
    
}
export default CoverHome;