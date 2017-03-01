import React, { PropTypes, Component } from 'react'
import { postPath } from '../../../../helpers/routes/index'
import Link from '../../../elements/Link'

export default class Title extends Component {
  render() {
    return (
    <h2>
      <Link to={postPath(this.props.id)}>{this.props.title}</Link>
    </h2>
    )
  }
}

Title.propTypes = {
  id: PropTypes.number,
  title: PropTypes.node
};
