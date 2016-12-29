import React, { Component, PropTypes } from 'react'

export default class Like extends Component {
  render(){
    const { likes, handlerLike } = this.props;
    return (
      <button onClick={handlerLike} className='like'>Like`s <span>{likes}</span></button>
    )
  }
}
Like.propTypes = {
  likes: PropTypes.number,
  handlerLike: PropTypes.func
};

Like.defaultProps = {
  likes: 0
};
