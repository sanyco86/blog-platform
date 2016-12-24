import React, { PropTypes, Component } from 'react'
import Title from '../components/Title'
import BlogInfo from '../components/BlogInfo'
import Image from '../components/Image'
import TextBox from '../components/TextBox'
import Like from '../components/Like'

export default class BlogItem extends Component {
    render(){
        const data = this.props.data;

        return (
            <div>
                <Title title={data.title} />
                <BlogInfo meta={data.meta} />
                <div className='clr'></div>
                <Image img={data.img} />
                <TextBox text={data.text} />
                <p className='spec'><a href='#' className='rm'>Read more</a></p>
                <div className='clr'></div>
                <Like likes={data.meta.likes} />
            </div>
        )
    }
}
BlogItem.PropTypes = {
    data: PropTypes.shape({
        meta: PropTypes.shape({
            author: PropTypes.string.isRequired
        }).isRequired,
        tags: PropTypes.array
    }).isRequired
};
BlogItem.defaultProps = {
    data: {
        meta: {
            author: 'admin'
        }
    }
};
