import React, { Component } from 'react'
import NavToggle from '../../elements/header/NavToggle'
import Link from '../Link'

export default class Logo extends Component {
  render() {
    return (
      <div className="navbar-header">
        <NavToggle />
        <Link className="navbar-brand" to='/'>iSolution</Link>
      </div>
    )
  }
}
