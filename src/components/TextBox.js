import React, { Component } from 'react'

export default class TextBox extends Component {
    render(){
        return (
            <span>
                {this.props.text}
            </span>
        )
    }
}