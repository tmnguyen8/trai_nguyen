import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

var d = new Date();
var currentYear = d.getFullYear();

function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center p-3">
                    <h6>
                        Copyright &copy; {currentYear} - Trai Nguyen - All Rights Reserved. 
                    </h6>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;