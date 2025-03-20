import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';

export default function App() {
  render(); {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route exact path="/"  component={Navbar} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

