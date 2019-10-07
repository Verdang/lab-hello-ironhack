import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><img src="/images/ironhack-logo.svg"></img> </li>
          </ul>
        <h1>SAY HELLO TO<br></br> REACTJS</h1>
        <h2>
          You will learn a Frontend<br></br> framework from scratch, to<br></br> become a Ninja developer
        </h2>
        <br></br>
        <button>AWSOME!</button>
        <br></br>
        <ul>
          <li><img src="/images/icon1.png"></img> <br></br> <h3><b> Declarative</b></h3> <h4>React makes it <br></br> painless to create<br></br> interacrive UIs </h4> </li>
          <li><img src="/images/icon2.png"></img><br></br> <h3><b>Components</b></h3> <h4>Build encapsuled<br></br> components that <br></br> manage there state </h4> </li>
          <li><img src="/images/icon3.png"></img><br></br> <h3><b>Single-Way</b></h3> <h4>A set of immutable<br></br> values are passed to  <br></br> the components </h4> </li>
          <li><img src="/images/icon4.png"></img><br></br> <h3><b>JSX</b></h3> <h4>Statycally-Typed<br></br> designed to run on <br></br> modern browsers</h4> </li>
        </ul>
      </div>
    );
  }
}
export default App;