import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import About from './Components/About';
import { Route, Routes,Router } from "react-router";

function App(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({ message });
    // setTimeout=()=>{

    // }
  }
  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <Router>
      <div className="container my-3">
        <Routes>
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter Your Text Here" />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
