import React from "react";
import "./App.css";
import RootRouter from "./routers";
import "./store/index";

function App() {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
