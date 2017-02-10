import React, { Component } from 'react'

export default class NavToggle extends Component {
  render() {
    return (
        <button type="button" className="navbar-toggle"
          dataToggle="collapse" dataTarget="#responsive-menu">
          <span className="sr-only">Toggle navigation</span>
          <span className='icon-bar' />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
    )
  }
}
