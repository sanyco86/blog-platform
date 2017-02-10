import React, { Component } from 'react'
import Logo from '../../elements/header/Logo'
import NavMenu from '../../elements/header/NavMenu'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <Logo />
          <NavMenu />
        </div>
      </nav>
    )
  }
}
