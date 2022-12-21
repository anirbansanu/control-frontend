import React, { Component } from 'react';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import './Tracker.css';
import TrackerCard from '../components/TrackerCard';
import TrackerModal from '../components/TrackerModal';

export default class Tracker extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            data: [],
            stateName: "WEST BENGAL",
            stateData: [],
            stateMeta: []
        }
        this.getCovidData = this.getCovidData.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCovidDataByState = this.handleCovidDataByState.bind(this);
    }
    handleCovidDataByState(passStateData){
        this.setState({
            stateName: passStateData.statename,
            stateData:passStateData.total,
            stateMeta: passStateData.meta
        });
    }
    async getCovidData(){
        try{
            const res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
            const actualData = await res.json();
            //console.log(actualData);
            this.setState({
                data:actualData,
                stateData:actualData.WB.total,
                stateMeta: actualData.WB.meta
            });
            // console.log(actualData);
            // console.log(this.state.stateData);
            // console.log(this.state.stateMeta);
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.getCovidData();
    }
    handleShowModal (){ 
        this.setState({showModal:true});
    }
    render() {
        return (
            <Container fluid className="mb-4">
                <Row >
                    <Col className="p-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h2 className="p-2 text-light">
                                Controller &nbsp;
                                <font style={{fontSize: "1.8rem"}}>
                                    <Badge className="glow" pill bg="danger">
                                        Live
                                    </Badge>
                                </font>
                        </h2> 
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3" sm={6} md={6} lg={4} onClick={() => this.setState({showModal:true})}>
                        <TrackerCard bg="#fa8231" smTitle="Power" lgTitle='On/Off' mainFontSize='2.5rem' tooltip={this.state.stateName} main={this.state.stateName.substr(0, 11)}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#20bf6b" smTitle="Controller" lgTitle='Start' mainFontSize='3rem' main={this.state.stateData.tested}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#f7b731" smTitle="Controller" lgTitle='Stop' mainFontSize='3rem' main={this.state.stateData.confirmed}/>
                    </Col>
                
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#2d98da" smTitle="Open" lgTitle='CHROME' icon={"fa-brands fa-chrome"} mainFontSize='3rem' main={this.state.stateData.deceased}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#a55eea" smTitle="Close" lgTitle='CHROME' icon={"fa-brands fa-chrome"} mainFontSize='3rem' main={this.state.stateData.recovered}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#eb3b5a" smTitle="Open" lgTitle='VS CODE' icon={"fa-solid fa-code"} mainFontSize='2.4rem' main={this.state.stateMeta.date}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#5f27cd" smTitle="Close" lgTitle='VS CODE' icon={"fa-solid fa-code"} mainFontSize='3rem' main={this.state.stateData.vaccinated1}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#2d98da" smTitle="Kill" lgTitle='PROGRAM' icon={"fa-solid fa-skull-crossbones"} mainFontSize='3rem' main={this.state.stateData.vaccinated2}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4} onClick={() => this.setState({showModal:true})}>
                        <TrackerCard bg="#fa8231" smTitle="Custom" lgTitle='MODAL' icon={"fa-solid fa-medal"} mainFontSize='2.5rem' tooltip={this.state.stateName} main={this.state.stateName.substr(0, 11)}/>
                    </Col>
                </Row>
                <TrackerModal stateWise={this.state.data} handleCovidDataByState={this.handleCovidDataByState} title="Choose States" show={this.state.showModal} onHide={() => this.setState({showModal:false})}/>
            </Container>
        )
    }
}
