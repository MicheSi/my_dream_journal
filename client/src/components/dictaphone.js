import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}><i className="fas fa-microphone"></i></button>
      <button onClick={SpeechRecognition.stopListening}><i className="fas fa-stop"></i></button>
      <button onClick={resetTranscript}><i className="fas fa-undo-alt"></i></button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone;