import React from "react";
import "./ramdom.css";

export default class RamdomNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { randomMessage: "" };
  }

  click = e => {
    e.preventDefault();
    console.log("Input", Math.random() * 100);
    let ramdom = Math.random() * 100;

    this.setState({
      randomMessage: ramdom
    });
  };

  render() {
    return (
      <div className="ramdom-box">
        <h1> {this.props.title} </h1>
        <h2> {this.props.description}</h2>

        <form onSubmit={event => this.click(event)}>
          <input type="Text" value={this.state.randomMessage}></input>
          <button> Enviar </button>
        </form>
      </div>
    );
  }
}
