import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Container>
                <Row className="align-items-center py-5">
                    {/* Left Content Section */}
                    <Col lg={6} className="text-start">
                        <div className="hero-label">WEB DEVELOPER & DESIGNER</div>
                        <h1 className="hero-title">
                            Welcome to <br />
                            My <span className="highlight-text">Portfolio!</span>
                        </h1>
                        <p className="hero-subtitle">
                            Passionate Web Developer crafting seamless digital experiences. 
                            Focused on building scalable applications and mastering modern frameworks.
                        </p>
                        
                        <div className="quote-box">
                            My career goal is to leverage modern technologies to solve
                            complex problems and deliver high-quality user experiences
                            through innovative tech solutions.
                        </div>

                        <div className="d-flex gap-3">
                            <Button className="btn-primary-custom" variant="primary">View My Work</Button>
                        </div>
                    </Col>

                    <Col lg={6} className="position-relative mt-5 mt-lg-0">
                        <div className="hero-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Workspace" 
                                className="hero-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Tech Stack Section */}
            <div className="tech-stack-section">
                <Container>
                    <Row className="text-center justify-content-center align-items-center g-4">
                        <Col xs={6} md={2}>
                            <div className="tech-item justify-content-center">
                                <span className="tech-icon">JS</span> JavaScript
                            </div>
                        </Col>
                        <Col xs={6} md={2}>
                            <div className="tech-item justify-content-center">
                                <span className="tech-icon">⚛</span> React JS
                            </div>
                        </Col>
                        <Col xs={6} md={2}>
                            <div className="tech-item justify-content-center">
                                <span className="tech-icon">CSS</span> Tailwind
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="tech-item justify-content-center">
                                <span className="tech-icon">🗄</span> SQL / NoSQL
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="tech-item justify-content-center">
                                <span className="tech-icon">☁</span> Cloud Native
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;
