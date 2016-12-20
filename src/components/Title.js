import React, { Component } from 'react'

export default class Title extends Component {
    render(){
        return (
            <h2><span>{this.props.title}</span></h2>
        )
    }
}