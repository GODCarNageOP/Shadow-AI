import React from "react";
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

const GoogleCalendar = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      end: {
        dateTime: end.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
    };

    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert("Event created, check your Google Calendar!");
      });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDateTimePicker"]}>
        <div className="calendar flex items-center justify-center py-20 flex-col">
          {session ? (
            <>
              <div className="w-[50vh] h-[500px] max-h-[500px] rounded-md flex flex-col">
                <div className="header  bg-black/60 text-white text-md h-[60px] rounded-md p-3 font-bold border-[#161C22] rounded-b-none border-4 flex items-center justify-between">
                 Create Events
                </div>
                <div className="middle flex flex-grow flex-col gap-10 p-2 overflow-x-hidden overflow-y-auto bg-[#161C22] pt-3">
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
                      className="text-white"
                      label="End Event"
                    />
                  </DemoItem>{" "}
                  <Box component="form" noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Event Name"
                      variant="outlined"
                      onChange={(e) => setEventName(e.target.value)}
                      className="text-white placeholder:text-white"
                    />
                  </Box>
                  <Box noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Event Description"
                      variant="outlined"
                      onChange={(e) => setEventDescription(e.target.value)} 
                    />
                  </Box>
                </div>
                <div
                  className="footer flex gap-2 text-white items-center border-4 border-[#161C22] rounded-none p-4 border-x-[#161C22] bg-[#161C22] hover:text-rose-500 active:bg-black cursor-pointer"
                  onClick={() => createCalendarEvent()}
                >
                  Create Event
                </div>
              </div>
              <button
                className="h-[60px] w-[50vh] bg-black/60 text-white min-w-[350px] cursor-pointer rounded-lg border-[#161C22] border-4 rounded-t-none p-4 flex gap-2 hover:text-rose-500"
                onClick={() => googleSignIn()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="h-[60px] w-[50vh] bg-black/60 text-white min-w-[350px] cursor-pointer rounded-lg border-[#161C22] border-4 rounded-t-none p-4 flex gap-2 hover:text-rose-500"
                onClick={() => signOut()}
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

export default GoogleCalendar;
