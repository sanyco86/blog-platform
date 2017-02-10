import React, { Component, PropTypes } from 'react'
import BlogItem from './BlogItem'


export default class BlogList extends Component {
  render() {
    const { items } = this.props,
      blogTemplate = items.map(
        function (item) {
          return (
            <BlogItem data={item} key={item.id} />
          )
        }
      );

    return (
      <div>
        {blogTemplate}
      </div>
    )
  }
}

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  handlerLike: PropTypes.func
};
