import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find the perfect Place</h1>
                <p className='search-text'>Search The laregerst asdome tghsdf lsadkfjbalfk </p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Search...'/>
                    </div>
                    <div className='radio'>
                        <input type='radio' checked/>
                        <label>Buy</label>
                        <input type='radio' checked/>
                        <label>Rent</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>

                        
                    </div>
                </form>
           
        </div>
    </div>
  )
}

export default Hero