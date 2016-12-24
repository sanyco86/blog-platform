import React, { Component } from 'react'
import { bind } from 'lodash/function'

export default class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { likes: props.likes};

        this.handleClick = bind(this.handleClick, this)
    }

    handleClick() {
        this.setState({likes: this.state.likes + 1})
    }
    render(){
        return (
            <button onClick={this.handleClick} className='like'>Like`s <span>{this.state.likes}</span></button>
        )
    }
}
