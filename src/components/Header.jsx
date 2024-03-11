import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'


export default function Header() {


  return (


    <>

    <div>
        <header>
        <h1>My Website</h1>

            <nav>   
              <ul>
                  <li><a href="/home" >Home</a></li>
                 <Link href="/about" >About</Link>
                <li><a href="/service" >Services</a></li>
                <li><a href="/contact" >Contact</a></li> 
                </ul> 
            </nav>

        </header>

            
          
       <hr></hr>
        
        <Home />

        <HomePage></HomePage>

        </div>
       </>

  )
}
