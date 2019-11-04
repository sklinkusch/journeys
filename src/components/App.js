import React from "react";
import "../styles/App.scss";
import MyNavBar from "./MyNavBar";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <Search />
      </header>
    </div>
  );
}

export default App;
