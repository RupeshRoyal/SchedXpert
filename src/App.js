import "./App.css"
import React from 'react';
import ProcessInput from './Components/ProcessInput';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ProcessInput />
      <ToastContainer/>
    </div>
  );
}

export default App;
