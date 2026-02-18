import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <Container>
                {/* Header */}
                <div className="contact-header">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        Have a project in mind or just want to say hi?<br />
                        Feel free to drop a message!
                    </p>
                </div>

                {/* Contact Form Card */}
                <div className="contact-card">
                    <form>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <div className="input-wrapper">
                                <span className="input-icon">👤</span>
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    className="form-control-custom" 
                                    placeholder="Jaycee Aguilan" 
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <div className="input-wrapper">
                                <span className="input-icon">✉</span>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="form-control-custom" 
                                    placeholder="jaycee@example.com" 
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <div className="input-wrapper textarea-wrapper"> {/* Icon removed for textarea based on common UX, or kept outside */}
                                <textarea 
                                    id="message" 
                                    className="form-control-custom" 
                                    placeholder="Type your message here..."
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-send">
                            Send Message <span>➤</span>
                        </button>
                    </form>
                </div>

            </Container>
        </div>
    );
};

export default Contact;
