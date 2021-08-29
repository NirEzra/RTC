import React from 'react'
import "../style/Footer.css"
import {Link} from "react-router-dom"




export default function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
          Rachel Table Cloth
          </p>

          <img src="/pictures/logoNobg.png" alt="" />
          <p className='footer-subscription-text'>
          Join Our Newsletter        </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
        
            </form>
          </div>
        </section>
        
        <div className='footer-links'>

            <div className='footer-link-items'>
            <h2>About</h2>
              <Link to='/about'>About Us</Link>
              <Link to='/'>Our Work</Link>
              <Link to='/'>Connection</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            
            <div className='footer-link-items'>
            <h2>Contact</h2>
              <Link to='/'> 0584166447</Link>
              <Link to='/'>0504166445</Link>
              <Link to='/'>r0584166447@gmail.com </Link>
            </div>

            <div className='footer-link-items'>
            <h2>Shop </h2>
              <Link to='/shop'>Table Maps</Link>
              <Link to='/shop'>Napkins</Link>
              <Link to='/gallery'>Gallery</Link>
            </div>
       
         
        </div>
        
          
          
          
                          <p className="copyright"><a className="link" href="https://www.linkedin.com/in/tal-mamistvalov/" target="_blank" rel="noreferrer">Tal
        Mamistvalov</a>  & <a className="link" href="https://www.linkedin.com/in/nir-ezra/" target="_blank" rel="noreferrer">Nir Ezra </a>
      Rights Reserved 2021 <i className="far fa-copyright"></i> </p>
            </div>

          
         
        
   
    )
}
