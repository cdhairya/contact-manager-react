import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "./context";

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
