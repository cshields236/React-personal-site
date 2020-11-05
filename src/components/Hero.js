import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {
    return (
        <Jumbotron className='bg-transparent'>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subtitle && <h2>{props.subtitle}</h2>}
                       
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero
