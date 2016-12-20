import React, { Component } from 'react'

export default class BlogInfo extends Component {
    render(){
        const tags = this.props.tags.map(function (tag, index) {
                return (
                    <a key={index} href='#'>{tag}</a>
                )

            }
        );
        return (
        <p className='infopost'>
            Posted&nbsp;
            <span className='date'>on {this.props.date}</span>&nbsp;
            by&nbsp;
            <a href='#'>{this.props.author}</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            Filed under {tags} &nbsp;&nbsp;
            <a href='#' className='com'>Comments <span>11</span></a>
        </p>
        )
    }
}