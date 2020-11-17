import React, { Component } from 'react';
import {Button,Form,Modal} from 'react-bootstrap';
import Home from './homePage';

/** It is modal component for communicating and uploading pictures to AWS */
class UploadModal extends Component {
    constructor(props)
{
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state={

        show: this.props.value
    }


}

handleClose(){

       
       
    this.setState({show:false})
    
     //console.log('clicked', this.state);
    
 };
 handleShow(){

       
       
    this.setState({show:true})
     //console.log('clicked', this.state);
    
 };
 

    render() { 
        return ( 
            <React.Fragment>

                {/** setting up the properties of the modal i.e. visibility and hiding, header and footer */}
            <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Upload Picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"text-center"}>
            <Form>
            <Form.Group>
            <Form.File id="uploadFile" label="select a picture" />
            </Form.Group>
        </Form>
        
        </Modal.Body>


        <Modal.Footer className={"text-center"}>
                        <Button
                            variant="success">
                            submit
                    </Button>
                    </Modal.Footer>
        </Modal> 

        <Home/>
        </ React.Fragment>    

         );
    }
}
 
export default UploadModal ;