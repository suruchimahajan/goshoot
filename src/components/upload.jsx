import React, { Component } from 'react';
import {Button,Form,Modal} from 'react-bootstrap';


class  Upload extends Component {

  constructor(props){

        super(props);
        this.state = {
            show: this.props.show
        }


    }
    handleUpload(){

        this.setState(
            {show:true}
            );
    }


    render() { 
        return(
                <React.Fragment>
            <Button className="m-1" size='lg' onClick={this.handleUpload}>Upload Picture
            </Button> 
            
            
            
            <Form show={this.state.show}>
            <Form.Group>
              <Form.File id="uploadFile" label="Example file input" />
            </Form.Group>
          </Form>
         
                </React.Fragment>
          
            );
    }
}
 
export default Upload;