import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hokkaido from "./components/places/Hokkaido";
import Honshu from "./components/places/Honshu";
import Shikoku from "./components/places/Shikoku";
import Kyushu from "./components/places/Kyushu";
import Okinawa from "./components/places/Okinawa";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div class="cursor"></div>
        <Nav />
        <Switch>
          <Route path="/hokkaido" exact component={Hokkaido} />
          <Route path="/honshu" component={Honshu} />
          <Route path="/shikoku" component={Shikoku} />
          <Route path="/kyushu" exact component={Kyushu} />
          <Route path="/okinawa" component={Okinawa} />
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;