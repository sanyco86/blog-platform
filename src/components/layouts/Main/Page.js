import React, { Component } from 'react'

export default class Page extends Component {
  render() {
    return (
      <div className="col-md-8">
        {this.props.children}
      </div>
    )
  }
}
