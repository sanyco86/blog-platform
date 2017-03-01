import React, { PropTypes, Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <img className='img-responsive' {...this.props.img} />
    )
  }
}

Image.propTypes = {
  img: PropTypes.object
};
