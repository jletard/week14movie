import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Review extends Component {
    render() {
        let starString ='';
        for(let i=0; i<this.props.stars; i++ ) {
            starString += '*';
        }

    return (
        <Card style={{width: '75%'}}>
        <Card.Header>{this.props.reviewTitle}</Card.Header>
        <Card.Body>
            <Card.Title>{starString}</Card.Title>
            <Card.Text>{this.props.review}</Card.Text>
            <Card.Text><em>&emsp;-{this.props.reviewer}</em></Card.Text>
        </Card.Body>
    </Card>
    )
  }
}
