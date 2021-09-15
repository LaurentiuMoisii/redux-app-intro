import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const HomePage = () => {
    return(
    <div className='container'>
        <h1 >Administration</h1>
        <p>React, Redux, React-Router</p>
        <Link to='about' className='btn'>Learn More</Link>
    </div>
    )

}

export default HomePage;