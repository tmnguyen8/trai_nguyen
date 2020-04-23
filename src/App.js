import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// MyComponents
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Bootstrap Components
import { Container } from "react-bootstrap";

import './App.css';

class App extends Component {
  state = {
    name: "Trai Nguyen",
    headerLinks: [
      {title: "Home", path: "/"},
      {title: "About", path: "/about"},
      {title: "Contact", path: "/contact"},
    ],
    home: {
      title: "Let's build something together",
      text: "Check out my portfolio projects"
    },
    about: {
      title: "About Me"
    },
    contact: {
      title: "Contact Me"
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar />
          <Switch >
            <Route exact path="/" render={() => <Home content={this.state.home}/>}/>
            <Route exact path="/about" render={() => <About content={this.state.contact}/>}/>
            <Route exact path="/contact" render={() => <Contact content={this.state.contact}/>}/>
          </Switch>
          
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
