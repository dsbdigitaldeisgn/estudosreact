import React, { Component } from 'react';
import './App.css';
import conversor from "./components/convert";

function App() {
  return (
    <div className="App">
      <conversor moeadaA="USD" moeadaB="BR"></conversor>
    </div>
  );
}

export default App;
