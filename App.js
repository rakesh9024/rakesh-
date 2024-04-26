import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
import Alert from './Component/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Component/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleBtn = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      showAlert("The dark mode is off", "success");
      document.title = "Text-changer light mode";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = 'white';
      showAlert("The dark mode is on", "success");
      document.title = "Text-changer dark mode";
    }
  };

  return (
    <Router>
      <Navbar title="Rakesh" mode={mode} toggleBtn={toggleBtn} showAlert={showAlert} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Text heading="Enter text here" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About showAlert={showAlert} alert={alert} />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
