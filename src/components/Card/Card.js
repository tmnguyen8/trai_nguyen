import React from 'react';
import { Card } from "react-bootstrap";

function myCard(props) {
    return (
        <div>
            <img className="" src={props.connection.imgSRC} alt={props.connection.imgSRC} />
            { props.connection.selected && <Card title={props.connection.title} />}
        </div>
    )
}
export default myCard;