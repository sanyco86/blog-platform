import React, { Component, PropTypes } from 'react'
import { bind } from 'lodash/function'
import request from 'superagent'
import { SERVER_PATH } from '../../../../constants/Data'

export default class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: false };
    this.handlerLike = bind(this.handlerLike, this);
  }

  handlerLike() {
    request
      .post(`${SERVER_PATH}/posts/${this.props.id}/like`)
      .send({ like: true })
      .end((err, res) => {
        if (err) throw err;
        this.setState(res.body);
      })
  }
  render() {
    const { likes } = this.props;

    return (
      <button onClick={this.handlerLike} className='btn btn-primary'>
        <span className="glyphicon glyphicon-heart"/>
        <span>&nbsp;{this.state.likes || likes}</span>
      </button>
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
