
import React from 'react'
 import sunset from "../assets/sunset_2.jpg"

 import profilePic from "../assets/profile.jpg"
 import kitty from "../assets/shadow.jpg"

export default function Card() {
  return (
    <div className="card">
        <img className='card-image'  src= {sunset} alt="Sun-Set Picture" ></img>

      <img className='card-image'  src= {kitty} alt="kitty picture" ></img>

                
        
        
        <h2>Simple Tech</h2>
        <p>Nature & Beauty</p>


    </div>
  )
}