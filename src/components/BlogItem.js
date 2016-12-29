import React, { PropTypes, Component } from 'react'
import Title from '../components/Title'
import BlogInfo from '../components/BlogInfo'
import Image from '../components/Image'
import TextBox from '../components/TextBox'
import Like from '../components/Like'

export default class BlogItem extends Component {
  render(){
    const {title, meta, img, text} = this.props.data,
      handlerLike = this.props.handlerLike;

    return (
      <div>
        <Title title={title} />
        <BlogInfo meta={meta} />
        <div className='clr'></div>
        <Image img={img} />
        <TextBox text={text} />
        <p className='spec'><a href='#' className='rm'>Read more</a></p>
        <div className='clr'></div>
        <Like likes={meta.likes} handlerLike={handlerLike} />
      </div>
    )
  }
}
BlogItem.PropTypes = {
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired
  }).isRequired,
  tags: PropTypes.array
};
BlogItem.defaultProps = {
  meta: {
    author: 'admin'
  }
};
