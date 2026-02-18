import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import profileImg from "../profile.png";

const About = () => {
  return (
    <div className="about-section">
      <Container>
        {/* Header Section */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Building digital experiences at the intersection of design and
            technology.
          </p>
        </div>

        <Row className="gy-5">
          {/* Left Column: Profile Image & Meta */}
          <Col lg={4}>
            <div className="profile-img-container">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
       
          </Col>

          {/* Right Column: Journey & Stats */}
          <Col lg={8}>
            <div className="section-label">
              My Journey
            </div>
            <div className="journey-text">
              <p>
                Sabi sa 'kin ni Bathala, "Matapang ka pala" Pusong leon kaya
                dibdib mo ay walang mga daga Alam mo bang mga pangarap mo ay
                pansamantala lamang Samantalang ang kapalaran ay sa mga tala
                nakatala? Kaya pala parang tamad na mag-aaral, walang
                kadala-dala Walang pang baon, pero kahapon pa ako handa Maglakad
                sa gubat kahit na takot sa palaka
              </p>
              <p>
                Inakyat ang kabundukan at maghapong naggala Inabutan ng dilim,
                muntikan na 'kong mawala Sa sarili ko, 'pag gapang ko, wala
                'kong makapa Nasa dulo na pala ng bangin, wala nang kawala
                Tumalon na lang kaya ako, kakayanin ko kaya? Kaya ako'y
                napadasal, sabay salto padapa "Bahala na si Batman, " 'yan ang
                saktong kataga 'Tsaka na 'ko gagawa ng mga pakpak ko pababa
              </p>
            </div>

            <Row className="g-4 mt-2">
     
              <Col md={6}>
                <div className="info-card">
                  <h5 className="info-header">Education</h5>
                  <div className="info-item">
                    <span className="item-title">B.S. Information Technology</span>
                    <span className="item-subtitle">
                      University of Cabuyao
                    </span>
                  </div>
                   <div className="info-item">
                    <span className="item-title">Senior High School STEM Student</span>
                    <span className="item-subtitle">
                      Pamantasan ng Cabuyao
                    </span>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Hobbies Section */}
        <div className="mt-5 pt-4">
          <div className="section-label mb-4">
          Beyond the Screen
          </div>
          <Row className="g-4">
            <Col md={4}>
              <div className="hobby-card">
                <div className="hobby-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Photography"
                    className="hobby-img"
                  />
                </div>
                <div className="hobby-content">
                  <h5 className="hobby-title">
                    Photography
                  </h5>
                  <p className="hobby-desc">
                    Capturing life's quiet moments and urban architecture
                    through my 35mm lens.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="hobby-card">
                <div className="hobby-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Traveling"
                    className="hobby-img"
                  />
                </div>
                <div className="hobby-content">
                  <h5 className="hobby-title">
                    Traveling
                  </h5>
                  <p className="hobby-desc">
                    Exploring diverse cultures and landscapes to gain new
                    perspectives on design.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="hobby-card">
                <div className="hobby-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Music"
                    className="hobby-img"
                  />
                </div>
                <div className="hobby-content">
                  <h5 className="hobby-title">
                     Acoustic Guitar
                  </h5>
                  <p className="hobby-desc">
                    Finding rhythm and relaxation through classical guitar and
                    indie folk melodies.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Let's build something together</h2>
          <p className="cta-subtitle">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn-white">Email Me</button>
            <button className="btn-outline-white">View Portfolio</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
