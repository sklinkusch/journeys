import React, { useState } from "react";
import "../styles/App.scss";
import MyNavBar from "./MyNavBar";
import Search from "./Search";
import stops from "../data/stops";

function App() {
  const [from, setFrom] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <Search stops={stops} setFrom={setFrom} />
      </header>
    </div>
  );
}

export default App;
