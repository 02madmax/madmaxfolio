import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// for my resume and cover letter I used a button that links to the pdf file, using d-flex it centers the button vertically and horizontally
// using flex box properties as well as flex-column and align-items-center and justify-content-center to center the text and button instead of css
const ResumePage = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="resume-section d-flex flex-column align-items-center justify-content-center">
                    <h3>Resume</h3>
                    <a href="/path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">View Resume</Button>
                    </a>
                </Col>
                <Col md={6} className="cover-letter-section d-flex flex-column align-items-center justify-content-center">
                    <h3>Cover Letter</h3>
                    <a href="/path_to_your_cover_letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">View Cover Letter</Button>
                    </a>
                </Col>

            </Row>
        </Container>
    );
}

export default ResumePage;
