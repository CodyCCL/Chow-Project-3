import { Container, Row, Col } from "react-bootstrap";
import Hero from '/homeBackground.jpg';
import hiwi1 from '/HIWIcon1.png';
import hiwi2 from '/HIWIcon2.png';
import hiwi3 from '/HIWIcon3.png';
import hd from '/homeDetail.jpg';
import './style.css';
function Home() {
    return (
        <Container>
        <Row >
            <Col>
            <img className='Hero' src={Hero}/>
            </Col>
        </Row>
        <Row>
          <Col className="text-primary"><b>How It Works</b></Col>
        </Row>
        <Row>
        <Col><img className='HIWI' src={hiwi1}/></Col>
        <Col><img className='HIWI' src={hiwi2}/></Col>
        <Col><img className='HIWI' src={hiwi3}/></Col>
        </Row>
        <Row>
          <Col className="Menu">Explore the Menu</Col>
        </Row>
        <Row className="detail">
          <Col>Taste the Rainbow</Col>
          <p>text</p>
          <Col><img className='detail-img' src={hd}/></Col>
        </Row>
        <Row className="detail">
          <Col>Taste the Rainbow</Col>
          <p>text</p>
          <Col><img className='detail-img' src={hd}/></Col>
        </Row>
        <Row className="detail">
          <Col>Taste the Rainbow</Col>
          <p>text</p>
          <Col><img className='detail-img' src={hd}/></Col>
        </Row>
        <Row>
          <Col className="Foot">What We Do</Col>
          <p>Some Footer text and contacts</p>
          <Col><img/></Col>
        </Row>
      </Container>
    );
}

export default Home;