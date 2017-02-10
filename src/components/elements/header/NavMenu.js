import React, { Component } from 'react'
import NavLink from '../NavLink'

export default class NavMenu extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="responsive-menu">
      <ul className="nav navbar-nav navbar-right">
        <NavLink to='/'><span>Home Page</span></NavLink>
        <NavLink to='/about'><span>About As</span></NavLink>
      </ul>
    </div>
    )
  }
}
