import { Component } from "react";

export class Button extends Component {
  render() {
    const { text } = this.props;

    return <button onClick={onClick}>{text}</button>;
  }
}
