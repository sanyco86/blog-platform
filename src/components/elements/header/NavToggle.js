import React, { Component } from 'react'

export default class NavToggle extends Component {
  render() {
    return (
        <button type="button" className="navbar-toggle"
          data-toggle="collapse" data-target="#responsive-menu">
          <span className="sr-only">Toggle navigation</span>
          <span className='icon-bar' />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
    )
  }
}
