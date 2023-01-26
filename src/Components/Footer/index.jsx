import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import appAndroid from '../../Assets/footerImg/google.png';
import appApple from '../../Assets/footerImg/apple.png';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = () => {
    const newsletterSubscribe = () => {
        console.log('click to button')
    }
    return (
        <>
            <footer className='myFooter'>
                <Container>
                    <Row>
                        <Col className='col-lg-4 col-md-6 col-12'>
                            <h3 className='head_3'>Follow us :- </h3>
                            <p>Get in Touch Don't Forget to Follow  me on all Social Network, </p>
                            <ul className='socialIconsList'>
                                <li className='facebook'>
                                    <a rel="noreferrer" href="#">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li className='linkedin'>
                                    <a rel="noreferrer" href="#">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li className='twitter'>
                                    <a rel="noreferrer" href="#">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li className='stackover'>
                                    <a rel="noreferrer" href="#">
                                        <BsStackOverflow />
                                    </a>
                                </li>
                                <li className='blogGoogle'>
                                    <a rel="noreferrer" href="#">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li className='github'>
                                    <a rel="noreferrer" href="#">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li className='ytube'>
                                    <a rel="noreferrer" href="#">
                                        <BsYoutube />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className='col-lg-4 col-md-6 col-12'>
                            <h3 className='head_3'>Sign Up To Newsletter </h3>
                            <p>Join 60.000+ subscribers and get a new discount coupon on every Friday.</p>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Your email address..."
                                    aria-label="Recipient's username"
                                    aria-describedby="user-email-placeholder"
                                />
                                <Button variant="secondary" id="button-addon2" onClick={newsletterSubscribe}>
                                    subscribe
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col className='col-lg-4 col-md-6 col-12'>
                            <h3 className='head_3'>Download App </h3>
                            <p>My ecommerce App is now available on App Store & Google Play. Get it now.</p>
                            <div className='appIcon'>
                                <img src={appAndroid} alt="Google App icon" />
                                <img src={appApple} alt="Apple App icon" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;