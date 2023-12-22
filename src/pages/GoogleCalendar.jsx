import React, { useEffect } from "react";
import PlusIcon from "../components/PlusIcon";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import styled from "styled-components";

const GoogleCalendar = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const { speak, voices } = useSpeechSynthesis();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  });

  const commands = [
    {
      command: "create event",
      callback: () => {
        speak({ text: "Please let me know the start time" });
      },
    },
    {
      command: "start time *",
      callback: (time) => {
        setStart(new Date(time));
        speak({ text: "Please let me know the end time" });
      },
    },
    {
      command: "end time *",
      callback: (time) => {
        setEnd(new Date(time));
        speak({ text: "What do you want as event name?" });
      },
    },
    {
      command: "event name ",
      callback: (name) => {
        setEventName(name);
        speak({ text: "What do you want as Event description?" });
      },
    },
    {
      command: "event description *",
      callback: (description) => {
        setEventDescription(description);
        speak({ text: "event added" });
        createCalendarEvent();
      },
    },
  ];

  const { browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands,
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    try {
      const res = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "https://www.googleapis.com/auth/calendar",
        },
      });
      console.log(res);
      navigate("/calendar");
    } catch (error) {
      speak({ text: "Error logging in to Google provider with Supabase" });
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    try {
      await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + session.provider_token,
          },
          body: JSON.stringify(event),
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          speak({ text: "Your event has been sucessfully created!" });
        });
    } catch (error) {
      speak({ text: "Please try again" });
      console.log(error);
    }
  }

  // console.log(session);
  // console.log(start);
  // console.log(eventName);
  // console.log(eventDescription);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDateTimePicker"]}>
        <div className="calendar flex items-center justify-center py-20 flex-col">
          {session ? (
            <>
              <div className="w-[25vw] h-[500px] max-h-[500px] rounded-md flex flex-col">
                <div className="header bg-black/60 text-white text-md h-[60px] rounded-md p-3 font-bold border-[#161C22] rounded-b-none border-4 flex items-center justify-between">
                  Create Events
                </div>
                <Container className="middle flex flex-grow flex-col gap-10 p-2 overflow-x-hidden overflow-y-auto bg-[#161C22] pt-3">
                  <DemoItem>
                    <MobileDateTimePicker
                      onChange={setStart}
                      value={dayjs(start)}
                      className="text-white"
                      label="Start Event"
                    />
                  </DemoItem>
                  <DemoItem>
                    <MobileDateTimePicker
                      onChange={setEnd}
                      value={dayjs(end)}
                      className=""
                      label="End Event"
                    />
                  </DemoItem>{" "}
                  <Box component="form" noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Event Name"
                      variant="outlined"
                      required={true}
                      onChange={(e) => setEventName(e.target.value)}
                      className=""
                    />
                  </Box>
                  <Box noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Event Description"
                      variant="outlined"
                      required={true}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                  </Box>
                </Container>
                <div
                  className="footer flex gap-2 text-white items-center border-4 border-[#161C22] rounded-none p-4 border-x-[#161C22] bg-[#161C22] hover:text-rose-500 active:bg-black cursor-pointer"
                  onClick={() => createCalendarEvent()}
                >
                  <PlusIcon />
                  Create Event
                </div>
              </div>
              <button
                className="h-[60px] w-[25vw] bg-black/60 text-white min-w-[350px] cursor-pointer rounded-lg border-[#161C22] border-4 rounded-t-none p-4 flex gap-2 hover:text-rose-500"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="h-[60px] w-[25vw] bg-black/60 text-white min-w-[350px] cursor-pointer rounded-lg border-[#161C22] border-4 rounded-t-none p-4 flex gap-2 hover:text-rose-500"
                onClick={() => googleSignIn()}
              >
                SignIn With Google
              </button>
            </>
          )}
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
};

const Container = styled.div`
   .MuiInputBase-input {
    color: white;
    width: 100% ;
   }
    label.MuiInputLabel-root{
      color: white;
  }
  .MuiInputBase-root {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export default GoogleCalendar;
