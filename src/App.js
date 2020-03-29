import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Christopher Underwood Developer Profile</title>
      </Helmet>
    </div>
  );
}

export default App;
