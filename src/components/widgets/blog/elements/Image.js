import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <img className='img-responsive' {...this.props.img} />
    )
  }
}
