import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Review from './Review';
import ReviewForm from './ReviewForm';


export default class Movie extends Component {
    render() {
        let reviews;
        if (this.props.reviews) {
            reviews = this.props.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <Card style={{align: 'center'}}>
                <Card style={{ width: '90%' }}>
                    <Card.Header><h1>{this.props.title}</h1></Card.Header>
                    <Card.Body>
                        <Card.Text><strong>{this.props.rating}</strong></Card.Text>
                        <Card.Text>{this.props.synopsis}</Card.Text>
                        {reviews}
                        <ReviewForm {...this.props.reviews}/>
                    </Card.Body>
                </Card>
            </Card>
        )
    }
}
