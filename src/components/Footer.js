import React from 'react'
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#D7CEC7', color: '#236084', marginTop: '50px' }}>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>


                    <Col className='p-0 d-flex ' style={{marginLeft: '44%'}} >
                        <b> This site was made by Conor Shields </b>
                    </Col>
                </Row>
                <ButtonGroup style={{marginLeft: '47%', marginTop: '15px', paddingBottom: '40px'}}>
                    <SocialIcon url='https://github.com/cshields236' bgColor='#236084' fgColor="#ff5a01" style={{marginRight: '10px'}} />
                    <SocialIcon newtwork='mailto' url='mailto:con.shields1@gmail.com' bgColor='#236084' fgColor="#ff5a01"  style={{marginRight: '10px'}}/>
                    <SocialIcon newtwork='linkedin' url='https://www.linkedin.com/in/conor-shields-369aa7166/' bgColor='#236084' fgColor="#ff5a01"   style={{marginRight: '10px'}}/>
                </ButtonGroup>
            </Container>

        </footer>
    );
}

export default Footer;