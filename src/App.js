import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LayaoutComponent from "./components/Layout.component";
import AcadamicsComponent from "./components/Acadamics.component";
import ContactComponent from "./components/Contact";
import HomeComponent from "./components/Home.component";
import CoursesComponent from "./components/Services.component";
import TimmingsComponent from "./components/Timming.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <LayaoutComponent />
     
    </div>
    </Router>
  );
}

export default App;
