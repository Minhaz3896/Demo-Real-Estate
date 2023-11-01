import React from 'react'

import './Footer.css'
import {FaFacebook,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaFacebook className='icon'/>
            <FaFacebook className='icon'/>
        </div>
        <div className='container'>
          <div className='col'>
            <h3>About</h3>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
          </div>
          <div className='col'>
            <h3>About</h3>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
          </div>
          <div className='col'>
            <h3>About</h3>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
          </div>
          <div className='col'>
            <h3>About</h3>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
          </div>

        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Footer