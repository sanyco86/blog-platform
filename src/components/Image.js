import React, { Component } from 'react'

const styles = {
    width: '100%',
    height: '305px'
};

const desc = 'Post';

export default class Image extends Component {
    render(){
        return (
            <img src={require(`../assets/images/${this.props.img}`)} style={styles} alt={desc}/>
        )
    }
}
