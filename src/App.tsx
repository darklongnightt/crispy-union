import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import NoteList from "./components/notes/NoteList";
import Location from "./components/pages/Location";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import IntroAnimations from "./components/layout/IntroAnimations";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <IntroAnimations />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/location" component={Location} />
          <Route path="/menu" component={Menu} />
          <Route path="/notes" component={NoteList} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
