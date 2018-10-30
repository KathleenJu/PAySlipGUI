import React, { Component } from 'react';
import {  Navigation, MYOBLogo } from "@myob/myob-widgets";
import Form from "./Form";
import PaySlip from "./PaySlip";

class App extends Component {
  render() {
      const brand = <Navigation.Brand url="#home" width="73px" children={<MYOBLogo />} />;

    return (
      <div className="container">
          <Navigation brand={brand} />
          <Form/>
      </div>
    );
  }
}

export default App;
