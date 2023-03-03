import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Got any questions?    
            </p>    
            
            <p className='footer-subscription-text'>
                Feel free to tell us your inquiries and concerns!
            </p>

        </section> 

        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <Link to='/location'>301 The Greenery, Pope John Paul II Avenue, Kasambagan, Cebu City, Philippines</Link>
                    <Link to='/contact'>+63917 327 6230</Link>
                    <Link to='/email'>info@mytsoftdevsolutions.com</Link>
                </div>
            </div>
        </div>

        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        <img src="/images/MZZZZ.png" className='nav_logo-img' />
                        MODULE-ZERO INTERNSHIP
                    </Link>
                </div>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </Link>

                    <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer