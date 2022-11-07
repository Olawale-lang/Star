import React from "react";
// import Browser
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StateMatch from "./component/star.js";

const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<StateMatch />} exact></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
