import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {
    return (
        <Jumbotron  style={{'backgroundColor': '#C09F80'}} >
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-1 font-weight-bolder' style={{color : '#236084'}}>{props.title}</h1>}
                        {props.subtitle && <h3 className='display-4 font-weight-light' >{props.subtitle}</h3>}
                        {props.text && <h3 className='lead font-weight-light'>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero
