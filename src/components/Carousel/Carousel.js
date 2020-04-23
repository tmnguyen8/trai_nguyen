import React, { Component } from 'react';
import Card from "../Card/Card";

import { Container, Row } from "react-bootstrap";

const connectionData = require("../../data/connections.json");

class Carousel extends Component {
    state = {
        connections: connectionData
    }

    handleCardClick = (id, card) => {
        let newConnections = [...this.state.connections]
        newConnections[id].selected = newConnections[id].selected? false: true;

        newConnections.forEach( connection => {
            if (connection.id !== id) {
                connection.selected = false;
            }
        });

        this.setState({connections: newConnections})
    }

    makeConnections = (connections) => {
        return connections.map(connection => {
            return <Card 
                connection={connection} 
                onClick={() => this.handleCardClick(connection.id)} 
                key={connection.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeConnections(this.state.connections)}
                </Row>
                
            </Container>
        )
    };
};

export default Carousel;