import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

//my about me page that will be updated later to include more information and custom styling
const AboutMe = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image src="/picofme.jpg" alt="picture of me in the mountains" className='profile-image' fluid />
                </Col>
                <Col md={8}>
                    <h2>About Me</h2>
                    <p>
                        My name is Phillip Lam Thach, I am a full stack web developer with a passion for
                        creating beautiful and functional websites. I graduated from the University of Utah's Full Stack
                        Web Development Bootcamp in 2023. In my past time I enjoy doing all things outdoors, hiking, camping,
                        fishing, backpacking and more.
                    </p>
                    <p>
                        I started my journey in web development in 2023, and have been learning and growing ever since.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
