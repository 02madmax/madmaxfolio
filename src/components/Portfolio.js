import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
    // store your projects' data in an array of objects
    const projects = [
        {
            title: "Weather Dashboard",
            description: "My first project using API's. This application allows the user to search for a city and get the current weather and a 5 day forecast",
            imageUrl: "/weather.png",
            liveUrl: "https://02madmax.github.io/Weather-App/",
            githubUrl: "https://github.com/02madmax/Weather-App"
        },
        {
            title: "Notes App",
            description: "This application allows the user to create, save, and delete notes.",
            imageUrl: "/screenshot2.png",
            liveUrl: "https://note-application02-2d352f5a811b.herokuapp.com/",
            githubUrl: "https://github.com/02madmax/Note-Taker"
        },
        {
            title: "Password Generator",
            description: "This application allows the user to generate a random password based on criteria they've selected.",
            imageUrl: "/passwords.png",
            liveUrl: "https://02madmax.github.io/PWGenerator/",
            githubUrl: "https://github.com/02madmax/PWGenerator"
        }
    ];

    //this is the JSX that will be rendered, it maps over the projects array and creates a card for each project
    return (
        <Container className="mt-5">
            <h2>My Portfolio</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.imageUrl} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Live Project
                                </Button>
                                &nbsp;
                                <Button variant="secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;
