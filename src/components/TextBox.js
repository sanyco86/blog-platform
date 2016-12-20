import React, { Component } from 'react'

export default class TextBox extends Component {
    render(){
        return (
            <div className='post_content'>
                <p>{this.props.text}</p>
            </div>
        )
    }
}