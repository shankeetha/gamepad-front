import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./containers/Games";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
