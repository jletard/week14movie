import React, { Component } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import Stars from './Stars';

export default class ReviewForm extends Component {
    constructor(props)
    {
        super(props);
        this.addReview = this.addReview.bind(this);
    }
    
    addReview(event) {
        console.log('pressed')
        event.preventDefault();
        let title = document.getElementById('reviewTitle').value;
        console.log(title);
        let newReview = {
            reviewTitle: document.getElementById('reviewTitle').value,
            reviewer: document.getElementById('reviewerName').value,
            stars: document.getElementById('stars').value,
            review: document.getElementById('reviewContent').value
        }
        console.log(newReview);
        console.log(this.props);
    }

    render() {
        return (
            <Card style={{ width: '75%' }}>
                <Card.Header>Leave your Review</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.addReview}>
                        <Form.Group className="mb-3" id="reviewerName">
                            <Form.Label>Reviewer Name:</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="reviewTitle">
                            <Form.Label>Review Title:</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                        <Stars />
                        <Form.Group className="mb-3" id="stars">
                            <Form.Label>Stars:</Form.Label>
                            <Form.Control type="number" placeholder="1-5" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="reviewContent">
                            <Form.Label>Review:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your review here" />
                        </Form.Group>
                        <Button variant="primary" size="lg" type='submit'>Submit Review</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
