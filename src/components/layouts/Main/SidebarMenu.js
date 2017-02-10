import React, { Component } from 'react'
import Search from '../../elements/Search'
import BlogCategories from '../../BlogCategories'
import SideWidget from '../../SideWidget'

export default class SidebarMenu extends Component {
  render() {
    return (
      <div className="col-md-4">
          <Search />
          <BlogCategories />
          <SideWidget />
      </div>
    )
  }
}
