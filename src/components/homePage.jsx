import React, {Component} from "react";
import {Container,Button, Image} from "react-bootstrap";
import UploadModal from "./uploadModal";


{/*tIt is the first component of the App, where brand logo, take and upload picture buttons are placed**/}
class Home extends Component{

/** setting up the state for the communication**/
  state=
  {

    show: false 
  };


upload = () =>{

  this.setState({ show:true });

  console.log(this.state.show);
  
};



render(){

    return(
        <React.Fragment>

          {/* hidding and visibling the  component according to show value */}

       {!this.state.show && <Container>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "window.innerWidth"
        }}
      >
            <Image src="./logo490.png" rounded />
            
      </div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:30
          
        }}
      >
      <Button className="m-2" size='lg' onClick={this.upload}>Upload Picture
      </Button> 
      </div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
        }}
      >
      
      <Button  className="m-1" size='lg'>Uplaod Selfie    
      </Button> 
      
      </div> 
      

      </Container>
      } 
      {/*  end of first component */}

      {/*start of another component  */}
       {this.state.show && <UploadModal value={this.state.show} /> } 
        </React.Fragment>
        
      /*  end of second component */
    );
}

} export default Home;