import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "./context";

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import About from "./components/About";
import AddContact from "./components/AddContact";

import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact/add" element={<AddContact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
