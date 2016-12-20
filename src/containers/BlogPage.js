import React, { Component } from 'react'
import BlogList from '../components/BlogList'
import SidebarMenu from '../components/SidebarMenu'
import { items } from '../constants/BlogItem'

export default class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items }
    }
    render(){
        const { items } = this.state;
        return (
            <div className='content_resize'>
                <div className='mainbar'>
                    <BlogList items={items} />
                    <p className='pages'><small>Page 1 of 2</small> <span>1</span> <a href='#'>2</a> <a href='#'>&raquo;</a></p>
                </div>
                <SidebarMenu />
                <div className='clr'></div>
            </div>
        )
    }
}
