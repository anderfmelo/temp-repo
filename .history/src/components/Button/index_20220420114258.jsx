import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, quandoClica } = this.props;

    return (
      <button className="button" onClick={quandoClica}>
        {text}
      </button>
    );
  }
}
