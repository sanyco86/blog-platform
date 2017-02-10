import React, { Component } from 'react'
import { postsPath } from '../../../../helpers/routes/index'
import Link from '../../../elements/Link'

export default class Title extends Component {
  render() {
    return (
    <h2>
      <Link to={postsPath(this.props.id)}>{this.props.title}</Link>
    </h2>
    )
  }
}
