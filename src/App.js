import React from 'react';
import './App.css';
import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
