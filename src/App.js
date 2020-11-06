import React from "react";
import "./App.css";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
