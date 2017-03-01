import React, { PropTypes } from 'react'
import BlogItem from './widgets/BlogItem'

const Post = ({item}) => (
  <div>
    { item && <BlogItem item={item} /> }
  </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post
