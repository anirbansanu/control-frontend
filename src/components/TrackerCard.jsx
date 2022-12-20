import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class TrackerCard extends Component {
    render() {
        return (
            <Card style={{background: this.props.bg, height:'245px'}} title={this.props.tooltip}>
                <Card.Body className="p-5" >
                    <Card.Title style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h5 >
                            <font style={{fontSize: "0.8rem",float:"bottom"}}>{this.props.smTitle}</font>
                            {this.props.lgTitle}
                        </h5>
                    </Card.Title>
                    
                        {/* 
                            <font className="mdl-text" style={{textAlign:"center",fontSize: this.props.mainFontSize? this.props.mainFontSize:"3.8"}}>{this.props.main}</font> 
                        */}
                        <div className="w-100 h-100 d-flex justify-content-center">
                            <i className={this.props.icon?this.props.icon:"fa-solid fa-power-off"} style={{fontSize: "5rem"}}></i>
                        </div> 
                    
                </Card.Body>
            </Card>
        )
    }
}
