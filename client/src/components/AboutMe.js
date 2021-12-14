import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function AboutMe() {
    return (
        <div className="about-me">
            <Container>
                <Row>
                    <Col>Test</Col>
                    <Col>Test</Col>
                </Row>
                <Row>
                    <Col>Hi</Col>
                    <Col>Hello</Col>
                    <Col>Hey</Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;