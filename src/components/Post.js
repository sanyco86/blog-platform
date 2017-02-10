import React, { Component } from 'react'
import BlogItem from './widgets/BlogItem'
import request from 'superagent'
import { SERVER_PATH } from '../constants/Data'

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { item: false };
  }

  componentDidMount() {
    request
      .get(`${SERVER_PATH}/posts/${this.props.params.id}.json`)
      .send()
      .end((err, res) => {
        if (err) throw err;
        this.setState({item: res.body});
      })
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        { item && <BlogItem data={item} /> }
      </div>
    )
  }
}
