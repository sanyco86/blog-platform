import React, { Component } from 'react'

export default class Image extends Component {
    render(){
        return (
            <img src={require(`../assets/images/${this.props.img}`)} style={{width: '100%', height: '305px'}} alt='Post'/>
        )
    }
}
