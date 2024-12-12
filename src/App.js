import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [text, setText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      setText('Disable DarkMode');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode Enabled', 'success');
    } else {
      setMode('light');
      setText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode Enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutus="About Us" mode={Mode} toggleMode={toggleMode} text={text} />
        <div className="container">
          <Alert alert={alert} />
          <Routes>

            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text for Analyzing.." mode={Mode} />} />
          <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
