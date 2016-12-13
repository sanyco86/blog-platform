import React, { Component } from 'react'
import Image from '../components/Image'
import TextBox from '../components/TextBox'

export default class BlogItem extends Component {
    render(){
        const data = this.props.data;

        return (
            <div>
                <Image img={data.img} />
                <TextBox text={data.text} />
            </div>
        )
    }
}