import './App.css';
import Navbar from '../src/components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [enable, setEnable] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      title: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert("Light Mode Enabled!", "success");
      document.body.style.backgroundColor = "white";
      setEnable("Enable Dark Mode");
      document.title = "TextFun-White Mode";

    }
    else {
      setMode('dark');
      showAlert("Dark Mode Enabled!", "success");
      document.body.style.backgroundColor = '#042743';
      setEnable("Enable Light Mode");
      document.title = "TextFun-Dark Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} enable={enable} />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Textform showAlert={showAlert} mode={mode} />}></Route>
          <Route path='/about' element={<About mode={mode}/>}></Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
