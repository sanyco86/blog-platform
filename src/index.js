import React from 'react'
import { render } from 'react-dom'
import Header from './containers/Header'
import BlogPage from './containers/BlogPage'
import Footer from './containers/Footer'
import './assets/css/app.css'

render(
    <div className='main'>
        <div className='header'><Header /></div>
        <div className='content'><BlogPage /></div>
        <div className='footer'><Footer /></div>
    </div>,
    document.getElementById('root')
);
