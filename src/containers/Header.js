import React, { Component } from 'react'

export default class Header extends Component {
  render(){
    return (
      <div className='header_resize'>
        <div className='searchform'>
          <form id='formsearch' name='formsearch' method='post' action='#'>
                      <span>
                        <input name='editbox_search' className='editbox_search' id='editbox_search' maxLength='80' placeholder='Search...' type='text' />
                      </span>
            <input name='button_search' src={require('../assets/images/search.jpg')} className='button_search' type='image' />
          </form>
        </div>
        <div className='logo'>
          <h1>
            <a href='/'>i<span>Solution</span> <small>Blog Platform</small></a>
          </h1>
        </div>
        <div className='clr'></div>
        <div className='menu_nav'>
          <ul>
            <li className='active'><a href='/'><span>Home Page</span></a></li>
            <li><a href='#'><span>Support</span></a></li>
            <li><a href='#'><span>About Us</span></a></li>
            <li><a href='#'><span>Blog</span></a></li>
            <li><a href='#'><span>Contact Us</span></a></li>
          </ul>
        </div>
        <div className='clr'></div>
      </div>
    )
  }
}
