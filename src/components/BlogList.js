import React, { Component } from 'react'
import BlogItem from '../components/BlogItem'


export default class BlogList extends Component {
    render(){
        const items = this.props.items;

        const blogTemplate = items.map(function (item, index) {
                return (
                    <div className='article' key={index}>
                        <BlogItem data={item}/>
                        <div className='clr'></div>
                    </div>
                )

            }
        );
        return (
            <div>
                {blogTemplate}
            </div>
        )
    }
}
