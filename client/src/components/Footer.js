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
              <Link to='/sign-up'>About Us</Link>
              <Link to='/'>Our Work</Link>
              <Link to='/'>Connection</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
            <h2>Contact</h2>
              <Link to='/'> Phone</Link>
              <Link to='/'>Cellular</Link>
              <Link to='/'>Fax</Link>
              <Link to='/'> Support</Link>
            </div>
         
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            <h2>Shop </h2>
              <Link to='/'>Table Maps</Link>
              <Link to='/'>Napkins</Link>
              <Link to='/Galeryy'>Gallery</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social</h2>
              <a href="https://www.instagram.com/techcareer">Instagram </a>
              <a href="https://www.facebook.com/tech.career">Facebook </a>
              <a href="https://www.youtube.com/channel/UCVNITxGQ4M_Ze5hxv36B40Q">YouTube </a>
             
            </div>
          </div>
        </div>
        
          
          
          
                          <p className="copyright"><a className="link" href="https://www.linkedin.com/in/tal-mamistvalov/" target="_blank" rel="noreferrer">Tal
        Mamistvalov</a>  & <a className="link" href="https://www.linkedin.com/in/nir-ezra/" target="_blank" rel="noreferrer">Nir Ezra </a>
      Rights Reserved 2021 <i className="far fa-copyright"></i> </p>
            </div>

          
         
        
   
    )
}
