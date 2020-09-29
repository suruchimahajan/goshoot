import React, {Component} from "react";
import {Container,Col, Row, Button, Image, Form} from "react-bootstrap";
import Upload from "./upload";



class Home extends Component{


  constructor(props) {
    super(props);
    this.state = {
        show: false
    }
}


upload(){

  this.setState({
    show:true
   
  })
  
//   return(
//   <Form>
//   <Form.Group>
//     <Form.File id="uploadFile" label="Example file input" />
//   </Form.Group>
// </Form>
//   );
}



render(){

    return(
        <React.Fragment>
        <Container>
        <Row>
        <Col md={{ span: 3, offset: 3 }}>
            <Image src="./logo490.png" rounded />
      </Col>
      </Row>
      <Row id="rUpload" >
      <Col md={{ span: 6, offset: 3 }}> 
      <Button className="m-1" size='lg' onClick={this.upload}>Upload Picture
      </Button> 
      </Col>
      </Row>
    {/**<ButtonGroup className="m-4" size='lg' vertical>
          
           <Button >Upload Image</Button> 
           <Button className="m-1" >Take Selfie</Button> 
    </ButtonGroup > */}
      
     
      <Row id="rTake" >
      <Col md={{ span: 6, offset: 3 }}> 
      <Button   size='lg'>Take Selfie
      </Button> 
      </Col>
        </Row>
      

      </Container>
      
      upload<Upload show={this.state.show}/>
        </React.Fragment>
        

    );
}

} export default Home;