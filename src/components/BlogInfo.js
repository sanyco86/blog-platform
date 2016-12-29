import React, { Component } from 'react'
import { retrieveDate } from '../helpers/Date'
export default class BlogInfo extends Component {
  render(){
    const meta = this.props.meta;
    const tags = meta.tags.map(function (tag, index) {
        return (
          <a key={index} href='#'>{tag}</a>
        )
      }
    );
    return (
      <p className='infopost'>
          Posted&nbsp;
          <span className='created_at'>on { retrieveDate(meta.created_at) }</span>&nbsp;
          Updated&nbsp;
          <span className='updated_at'>on { retrieveDate(meta.updated_at) }</span>&nbsp;
          by&nbsp;
          <a href='#'>{meta.author}</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          Filed under {tags} &nbsp;&nbsp;
      </p>
    )
  }
}
