import React from "react";
import logo from "../assets/cloud.png";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { commands } from "../data/Commands";

const Home = () => {
 
  const { browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="bg-transparent h-screen w-full">
      <div className="container flex items-center justify-center m-auto p-20">
        <img
          src={logo}
          alt=""
          className="h-96 w-96"
          onClick={SpeechRecognition.startListening}
        />
      </div>
    </div>
  );
};

export default Home;
