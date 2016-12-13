import React from 'react'
import { render } from 'react-dom'
import BlogPage from './containers/BlogPage'
import './assets/css/app.css'

render(
    <div className='container'>
        <BlogPage />
    </div>,
    document.getElementById('root')
);
