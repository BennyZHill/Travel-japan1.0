import React from "react";
import Nav from "./components/Nav";
import About from "./components/japan/About";
import Home from "./components/Home";
import Contact from "./components/japan/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hokkaido from "./components/japan/Hokkaido";
import Honshu from "./components/japan/Honshu";
import Shikoku from "./components/japan/Shikoku";
import Kyushu from "./components/japan/Kyushu";
import Okinawa from "./components/japan/Okinawa";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/hokkaido" exact component={Hokkaido} />
          <Route path="/honshu" component={Honshu} />
          <Route path="/shikoku" component={Shikoku} />
          <Route path="/kyushu" exact component={Kyushu} />
          <Route path="/okinawa" component={Okinawa} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
