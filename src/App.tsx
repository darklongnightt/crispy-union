import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import NoteList from "./components/notes/NoteList";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/notes" component={NoteList} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
