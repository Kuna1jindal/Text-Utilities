import About from "./About";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
}  from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#001738";
      document.body.style.color = "white";
    }
  };
  return (
    <>
 
        <Router>
        <Navbar
          title="Text Utils"
          services="Our services"
          mode={mode}
          togglemode={toggleMode}
          showAlert={showAlert}
          />
          <TextForm mode={mode}/>
        <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
          {/* <Route exact path="/" element={ }> */}
        {/* </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
