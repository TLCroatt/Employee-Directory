import React from "react";
import "./App.css";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import DataArea from "./components/DataArea";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <DataArea />
      </Main>
      
    </Wrapper>
  );
}

export default App;
