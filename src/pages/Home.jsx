import React, { useEffect } from "react";
import logo from "../assets/cloud.png";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { commands } from "../data/Commands";
import { useSpeechSynthesis } from 'react-speech-kit';

const Home = () => {

  const { speak, voices } = useSpeechSynthesis();
  console.log(voices)

  const Greet =()=> {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak({text: "Good Morning Boss", rate: 1.2, pitch: 1.4, voice: voices[4]});
    }

    else if(hr == 12) {
        speak({text:"Good noon Boss", rate: 1.2, pitch: 1.4, voice: voices[4]});
    }

    else if(hr > 12 && hr <= 17) {
        speak({text:"Good Afternoon Boss", rate: 1.2, pitch: 1.4, voice: voices[4]});
    }

    else {
        speak({text:"Good Evening Boss", rate: 1.2, pitch: 1.4, voice: voices[4]});
    }
}

useEffect(()=> {
  
  speak({text: "Activating Shadow", rate: 1.2, pitch: 1.4, voice: voices[4]}),
  speak({text: "Shadow online", rate: 1.2, pitch: 1.4, voice: voices[4]})
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
      <div className="container flex items-center justify-center m-auto pt-20">
         <img
          src={logo}
          alt=""
          className="h-80 w-80"
          onClick={SpeechRecognition.startListening({continuous: true})}
        />
      </div>
    </div>
  );
};

export default Home;