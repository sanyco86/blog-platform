import React, { Component } from 'react'
import Title from '../components/Title'
import BlogInfo from '../components/BlogInfo'
import Image from '../components/Image'
import TextBox from '../components/TextBox'

export default class BlogItem extends Component {
    render(){
        const data = this.props.data;

        return (
            <div>
                <Title title={data.title} />
                <BlogInfo author={data.author} date={data.date} tags={data.tags} />
                <div className='clr'></div>
                <Image img={data.img} />
                <TextBox text={data.text} />
                <p className='spec'><a href='#' className='rm'>Read more</a></p>
            </div>
        )
    }
}