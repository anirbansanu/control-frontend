import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class StatesCard extends Component {
    render() {
        return (
            <Card style={{background: this.props.bg, height:'125px'}}>
                <Card.Body className="p-1" style={{display: 'flex',  justifyContent:'center', alignItems:'center',color: '#fff'}}>
                        <h4>
                            <font style={{fontSize: "0.8rem",float:"bottom"}}>{this.props.smTitle}</font>
                            {this.props.lgTitle}
                        </h4>
                </Card.Body>
            </Card>
        )
    }
}
