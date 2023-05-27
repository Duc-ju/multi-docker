import React, { Component } from 'react'
import OtherPage from "./OtherPage.jsx";
import Fibonacci from "./Fibonacci.jsx";
import {Routes, Link, Route} from "react-router-dom";

class App extends Component{
  render() {
    return (
      <div>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/fibonacci"}>Fibonacci</Link>
          <Link to={"/other-pages"}>Other Page</Link>
        </div>
        <Routes>
          <Route path={"/fibonacci"} element={<Fibonacci />} />
          <Route path={"/other-pages"} element={<OtherPage />} />
        </Routes>
      </div>
    )
  }
}

export default App
