import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    <div className='jumbotron'>
        <h1>Administration</h1>
        <p>React, Redux, React-Router</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
    </div>
}

export default HomePage;