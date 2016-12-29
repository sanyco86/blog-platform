import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return (
      <div className='footer_resize'>
          <div className='col c1'>
              <h2><span>Image</span> Gallery</h2>
              <a href='#'><img src={require('../assets/images/gal1.jpg')} width='75' height='75' alt='' className='gal' /></a>
              <a href='#'><img src={require('../assets/images/gal2.jpg')} width='75' height='75' alt='' className='gal' /></a>
              <a href='#'><img src={require('../assets/images/gal3.jpg')} width='75' height='75' alt='' className='gal' /></a>
              <a href='#'><img src={require('../assets/images/gal4.jpg')} width='75' height='75' alt='' className='gal' /></a>
              <a href='#'><img src={require('../assets/images/gal5.jpg')} width='75' height='75' alt='' className='gal' /></a>
              <a href='#'><img src={require('../assets/images/gal6.jpg')} width='75' height='75' alt='' className='gal' /></a>
          </div>
          <div className='col c2'>
              <h2><span>Services</span> Overview</h2>
              <p>Curabitur sed urna id nunc pulvinar semper. Nunc sit amet tortor sit amet lacus sagittis posuere cursus vitae nunc.Etiam venenatis, turpis at eleifend porta, nisl nulla bibendum justo.</p>
              <ul className='footer_ul'>
                  <li><a href='#'>Lorem ipsum dolor labore et dolore.</a></li>
                  <li><a href='#'>Excepteur officia deserunt.</a></li>
                  <li><a href='#'>Integer tellus ipsum tempor sed.</a></li>
              </ul>
          </div>
          <div className='col c3'>
              <h2><span>Contact</span> Us</h2>
              <p>Nullam quam lorem, tristique non vestibulum nec, consectetur in risus. Aliquam a quam vel leo gravida gravida eu porttitor dui.</p>
              <p className='contact_info'> <span>Address:</span> Odessa, Ukraine<br />
                  <span>Skype:</span> <a href='skype:sanyco86?chat'>sanyco86</a><br />
                  <span>Telegram:</span> <a href='https://telegram.me/lutsko86'>lutsko86</a><br />
                  <span>GitHub:</span> <a href='https://github.com/sanyco86'>sanyco86</a><br />
                  <span>E-mail:</span> <a href='mailto:lutsko86@gmail.com'>lutsko86@gmail.com</a>
              </p>
          </div>
      </div>
    )
  }
}
