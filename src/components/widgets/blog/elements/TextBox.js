import React, { PropTypes, Component } from 'react'

export default class TextBox extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}

TextBox.propTypes = {
  text: PropTypes.node
};
