import React from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function myJumbotron(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={12} sm={12}>
                        { props.content.title && <h3 className="display-1 font-weight-bolder">{props.content.title}</h3> }
                        { props.content.text && <h5 className="lead font-weight-light">{props.content.text}</h5> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}
export default myJumbotron;