import React, { PropTypes, Component } from 'react'
import Title from './blog/elements/Title'
import BlogInfo from './blog/elements/BlogInfo'
import Image from './blog/elements/Image'
import TextBox from './blog/elements/TextBox'
import Like from './blog/elements/Like'

export default class BlogItem extends Component {

  render() {
    const { title, meta, img, text, id } = this.props.item;

    return (
      <div>
        <Title title={title} id={id} />
        <BlogInfo meta={meta} />
        <hr/>
        <Image img={img} />
        <hr/>
        <TextBox text={text} />
        <hr/>
        <Like likes={meta.likes} id={id} />
        <hr/>
      </div>
    )
  }
}

BlogItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.node,
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired
  }).isRequired,
  img: PropTypes.object,
  text: PropTypes.node,
};

BlogItem.defaultProps = {
  meta: {
    author: 'admin'
  }
};
