import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Content from '../../Content'
import Footer from './Footer'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content children={this.props.children} />
        <Footer />
      </div>
    )
  }
}

Main.PropTypes = {
  children: PropTypes.node
};
