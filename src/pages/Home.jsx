import React, { useEffect } from "react";
import logo from "../assets/cloud.png";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { commands } from "../data/Commands";
import { useSpeechSynthesis } from 'react-speech-kit';

const Home = () => {

  const { speak } = useSpeechSynthesis();

  const Greet =()=> {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak({text: "Good Morning Boss"});
    }

    else if(hr == 12) {
        speak({text:"Good noon Boss"});
    }

    else if(hr > 12 && hr <= 17) {
        speak({text:"Good Afternoon Boss"});
    }

    else {
        speak({text:"Good Evening Boss"});
    }
}

useEffect(()=> {
  speak({text: "Activating Shadow"}),
  speak({text: "Shadow online"})
  Greet()
},[])

  const { browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="bg-transparent h-screen w-full">
      <div className="container flex items-center justify-center m-auto pt-20" onClick={()=>greet()}>
        <img
          src={logo}
          alt=""
          className="h-80 w-80"
          onClick={SpeechRecognition.startListening}
        />
      </div>
    </div>
  );
};

export default Home;
