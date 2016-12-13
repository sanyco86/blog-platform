import React, { Component } from 'react'
import BlogList from '../components/BlogList'
import { items } from '../constants/BlogItem'

export default class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items }
    }
    render(){
        const { items } = this.state;
        return (
            <div>
                <BlogList items={items} />
            </div>
        )
    }
}
