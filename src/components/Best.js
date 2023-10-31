import React from 'react'
import './Best.css'

import apt1 from '../assets/apt1.jpg'
// import apt2 from '../assets/apt2.jpg'




const Best = () => {
  return (
    <div className='best'>
        <h1>Find Best Rated Properties</h1>

        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className='container'>
            <img src={apt1} alt=''/>
            <img src={apt1} alt=''/>
            <img src={apt1} alt=''/>
        </div>
        <button className='btn'>View All</button>
    </div>
  )
}

export default Best