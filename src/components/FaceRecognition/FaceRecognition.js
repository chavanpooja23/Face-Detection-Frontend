import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  
  const faceBoxGenerator = (dimensions) => {
    return dimensions.map((box, i) => (
      <div key={i} className='bounding-box'
      style={{
        top: dimensions[i].topRow, 
        right: dimensions[i].rightCol, 
        bottom: dimensions[i].bottomRow, 
        left: dimensions[i].leftCol
    }}></div>

    ))
  }
  
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {faceBoxGenerator(box)}
      </div>
    </div> 
  );
}

export default FaceRecognition;