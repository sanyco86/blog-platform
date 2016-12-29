import React, { Component } from 'react'
import { bind } from 'lodash/function'
import BlogList from '../components/BlogList'
import SidebarMenu from '../components/SidebarMenu'
import { items } from '../constants/BlogItem'
import PieChart from '../components/PieChart'

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.incrementLikes = bind(this.incrementLikes, this);
  }
  incrementLikes(itemId) {
    const newItems = items.map(function (item) {
      if (item.id === itemId) ++item.meta.likes;
      return item;
    });
    this.setState({items: newItems});
  }
  render(){
    const { items } = this.state,
      columns = items.map(item => [item.title, item.meta.likes]);
    return (
      <div className='content_resize'>
          <div className='mainbar'>
              <PieChart columns={columns} />
              <BlogList items={items} handlerLike={this.incrementLikes} />
              <p className='pages'><small>Page 1 of 2</small> <span>1</span> <a href='#'>2</a> <a href='#'>&raquo;</a></p>
          </div>
          <SidebarMenu />
          <div className='clr'></div>
      </div>
    )
  }
}
