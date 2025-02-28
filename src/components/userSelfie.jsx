import React, { Component } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
   
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
   
   
  };

class UserSelfie extends Component {
    state = {  }

    render() { 
        return ( 
              <>
              <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button>
            </>



          );
    }
}
 
export default UserSelfie;