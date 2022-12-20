import {React , Component} from 'react';
import { Row,Col,Modal } from 'react-bootstrap';
import StatesCard from './StatesCard';
import StatesNames from './statesNames';

export default class TrackerModal extends Component {
    render() {
        return ( 
            <Modal
                show={this.props.show}
                centered
                keyboard={false}
                fullscreen={true} >

                <Modal.Body >
                <button type="button" title="close" onClick={this.props.onHide} className="modal-btn-close border-0" style={{float:'right', outline:"0px"}} aria-label="Close">
                &#x2716;
                </button>
                    <h4>{this.props.title}</h4>
                    <Row className='mt-4'>
                        { 
                            Object.keys(StatesNames).map((item, i) => (
                                <Col sm={6} md={4} lg={3} className='mt-2 mb-2' onClick={this.props.onHide} key={i}>
                                    <div onClick={()=>{
                                        let s = this.props.stateWise[item];
                                        s["statename"] = StatesNames[item].name.substr(0, 20);
                                        this.props.handleCovidDataByState(s) } }>
                                    <StatesCard bg={StatesNames[item].color} lgTitle={ StatesNames[item].name.substr(0, 20) }/>
                                    </div>
                                </Col>
                            ))
                        }  
                        
                        
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="light" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
        </Modal>
        )
    }
}