import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-section">
            <Container>
                {/* Header Section */}
                <div className="skills-header">
                    <span className="section-label">Expertise</span>
                    <h2 className="skills-title">My Technical Toolbox</h2>
                    <p className="skills-subtitle">
                        A collection of specialized technologies and frameworks I use to bring
                        complex ideas to life through clean, scalable code.
                    </p>
                </div>

                {/* Skills Grid */}
                <Row className="g-4">
                    {/* JavaScript */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-js">JS</div>
                            </div>
                            <h4 className="skill-name">JavaScript</h4>
                            <p className="skill-desc">
                                Modern asynchronous patterns, functional programming, and advanced DOM manipulation.
                            </p>
                        </div>
                    </Col>

                    {/* React */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-react">⚛</div>
                            </div>
                            <h4 className="skill-name">React.js</h4>
                            <p className="skill-desc">
                                State management with Redux/Zustand, custom hooks, and performance optimization techniques.
                            </p>
                        </div>
                    </Col>

                    {/* CSS/Tailwind */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-css">CSS</div>
                            </div>
                            <h4 className="skill-name">CSS3 & Tailwind</h4>
                            <p className="skill-desc">
                                Responsive layouts, complex animations, and utility-first styling for maintainable UI components.
                            </p>
                        </div>
                    </Col>

                    {/* HTML5 */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-html">HTML</div>
                            </div>
                            <h4 className="skill-name">HTML5</h4>
                            <p className="skill-desc">
                                Semantic mark-up, accessibility (A11y) standards, and SEO-friendly document structuring.
                            </p>
                        </div>
                    </Col>

                    {/* Node.js */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-node">Node</div>
                            </div>
                            <h4 className="skill-name">Node.js</h4>
                            <p className="skill-desc">
                                Building RESTful APIs, Express middleware, and backend integration with various databases.
                            </p>
                        </div>
                    </Col>

                    {/* Git */}
                    <Col lg={4} md={6}>
                        <div className="skill-card">
                            <div className="card-header-flex">
                                <div className="icon-box icon-git">Git</div>
                            </div>
                            <h4 className="skill-name">Git & GitHub</h4>
                            <p className="skill-desc">
                                Version control, collaborative workflows, CI/CD pipelines, and pull request management.
                            </p>
                        </div>
                    </Col>
                </Row>

      
            </Container>
        </div>
    );
};

export default Skills;
