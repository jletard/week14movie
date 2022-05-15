import React, { Component } from 'react';
import { Form, FormLabel } from 'react-bootstrap';

export default class Stars extends Component {
    render() {
        return (
            <div>
                <Form.Group>         
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <FormLabel>Stars:&nbsp;</FormLabel>
                            <Form.Check
                                inline
                                label="*"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="**"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="***"
                                name="group1"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label="****"
                                name="group1"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label="*****"
                                name="group1"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                        </div>
                    ))}
                </Form.Group>
            </div>
        )
    }
}
