import React from 'react'

import './Feature.css'

import int from "../assets/int.jpg"
import int1 from "../assets/int1.jpg"
import int2 from "../assets/int2.jpg"


const Feature = () => {
  return (
    <div className='feature'>
        <h1 className='feature-text'>Top Fetured Listing</h1>
        <p className='feature-text'>Selected listing by city, state, & zip based on views</p>

        <div className='container'>
            <img className='span-3 image-grid-row-2' src={int} alt='interior'/>
            <img src={int1} alt=''/>
            <img src={int1} alt=''/>
            <img src={int2} alt=''/>
            <img src={int2} alt=''/>
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>Dhaka city</h2>
                    <p>HOUSE FOR SALE</p>
                    <p className='price'>$2,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathroom:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Squere Feet:</p><p>5000</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right img-details'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button className='btn'>View</button>
            </div>
            
        </div>
        {/* Second Section */}

        <div className='container'>
            <img className='span-3 image-grid-row-2' src={int} alt='interior'/>
            <img src={int1} alt=''/>
            <img src={int1} alt=''/>
            <img src={int2} alt=''/>
            <img src={int2} alt=''/>
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>Dhaka city</h2>
                    <p>HOUSE FOR SALE</p>
                    <p className='price'>$2,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathroom:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Squere Feet:</p><p>5000</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right img-details'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button className='btn'>View</button>
            </div>
            
        </div>

    </div>
  )
}

export default Feature