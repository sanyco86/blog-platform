import React, { Component } from 'react'
import Page from './layouts/Main/Page'
import SidebarMenu from './layouts/Main/SidebarMenu'

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Page children={this.props.children}/>
          <SidebarMenu />
        </div>
      </div>
    )
  }
}
