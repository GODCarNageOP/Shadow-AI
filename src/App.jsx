import Shadow from "./Shadow";

function App() {
  return <div className="bg w-full h-screen">
    <div className="top h-[60%] w-full">
      {/* <Shadow/> */}
    </div>
    <div className="bottom h-[40%] w-full flex flex-col items-center justify-center gap-5">
      <div className="h-48 w-48">
        <Shadow/>
      </div>
      {/* <img src="" alt="" className="h-14 w-14 rounded-full"/> */}
      <input type="text" className="h-10 w-[60%] bg-transparent outline-transparent border-none"/>
    </div>
  </div>
}

export default App;