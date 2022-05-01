import React from 'react';
import './Footer.scss';
import Button  from './Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiAdguard } from 'react-icons/si';
import Moment from 'moment';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form action='/'>
              <input className='footer-input' name='email' type='email' placeholder='Your Email' required/>
                 <Button  buttonStyle='btn-secondary'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='#'>How it works</Link>
              <Link to='#'>Testimonials</Link>
              <Link to='#'>Careers</Link>
              <Link to='#'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='#'>Contact</Link>
              <Link to='#'>Support</Link>
              <Link to='#'>Destinations</Link>
              <Link to='#'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Videos</h2>
              <Link to='#'>Submit Video</Link>
              <Link to='#'>Ambassadors</Link>
              <Link to='#'>Agency</Link>
              <Link to='#'>Influencer</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='#'>Instagram</Link>
              <Link to='#'>Facebook</Link>
              <Link to='#'>Youtube</Link>
              <Link to='#'>Twitter</Link>
            </div>
          </div>
        </div>
        <div className='social'>
          <section className='social-media'>
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link to='#' className='social-logo'>
                   <SiAdguard />&nbsp;Guardian
                </Link>
              </div>
              <small className='website-rights'>Guardian © { Moment(new Date()).format("YYYY") }</small>
              <div className='social-icons'>
                <Link className='social-icon-link' to='#' aria-label='Facebook'>
                    <FaFacebook />
                </Link>
                <Link className='social-icon-link' to='#' aria-label='Instagram'>
                    <FaInstagram />
                </Link>
                <Link className='social-icon-link' to='#' aria-label='Youtube'>
                  <FaYoutube />
                </Link>
                <Link className='social-icon-link' to='#' aria-label='Twitter'>
                  <FaTwitter />
                </Link>
                <Link className='social-icon-link' to='#' aria-label='LinkedIn'>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
