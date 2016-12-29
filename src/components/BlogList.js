import React, { Component, PropTypes } from 'react'
import BlogItem from '../components/BlogItem'


export default class BlogList extends Component {
  render(){
    const { items, handlerLike } = this.props,
      blogTemplate = items.map(function (item) {
          return (
            <div className='article' key={item.id}>
              <BlogItem data={item} handlerLike={() => handlerLike(item.id)} />
              <div className='clr'></div>
            </div>
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
