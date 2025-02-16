import React, { useState } from 'react';
import './interview.css';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleButtonClick = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    console.log('Recording started');
    // Add your recording logic here
  };

  const stopRecording = () => {
    console.log('Recording stopped');
    // Add your stop recording logic here
  };

  return (
    <div className="container">
      <button className="button" onClick={handleButtonClick}>
        {isRecording ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default App;
