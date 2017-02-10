import React, { Component } from 'react'
import request from 'superagent'
import { SERVER_PATH } from '../constants/Data'
import BlogList from '../components/widgets/BlogList'
import Paginate from '../components/widgets/Paginate'

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    request
      .get(`${SERVER_PATH}/posts.json`)
      .send()
      .end((err, res) => {
        if (err) throw err;
        this.setState({items: res.body});
      })
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <Paginate />
        <BlogList items={items} />
        <Paginate />
      </div>
    )
  }
}
