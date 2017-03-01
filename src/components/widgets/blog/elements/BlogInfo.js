import React, { PropTypes, Component } from 'react'
import { retrieveDate } from '../../../../helpers/Date'

export default class BlogInfo extends Component {
  render() {
    const meta = this.props.meta;

    return (
      <div>
        <p className="lead">
          by&nbsp;
          <a href='#'>{meta.author}</a>
        </p>
        <p>
          <span className="glyphicon glyphicon-time"/>
          &nbsp;Posted on&nbsp;
          { retrieveDate(meta.createdAt) }
        </p>
      </div>
    )
  }
}

BlogInfo.propTypes = {
  meta: PropTypes.object
};
