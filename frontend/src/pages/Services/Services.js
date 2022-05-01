import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

function Services() {
  return (
    <div className="services">
      <div className="services-wrapper">
         <h1 className="services-heading">Services</h1>
         <div className="services-container">
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-1.svg'} className="services-container-img" alt="Managed Services display"/>
                        <h3 className="services-heading-subtitle">Managed Services</h3>
                        <p className="services-text">Unleash the power of insights with critical business execution across campaigns and channels.</p>
                        </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-2.svg'} className="services-container-img" alt="Financial Services display"/>
                        <h3 className="services-heading-subtitle">Financial Services</h3>
                        <p className="services-text">Continuously innovate and optimize your programs to meet changing consumer financial needs.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-3.svg'} className="services-container-img" alt="Cardholder Services display"/>
                        <h3 className="services-heading-subtitle">Cardholder Services</h3>
                        <p className="services-text">Drive brand loyalty and card preference with cardholder services designed to fit consumer needs.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-4.svg'} className="services-container-img" alt="Authentication Services display"/>
                        <h3 className="services-heading-subtitle">Authentication Services</h3>
                        <p className="services-text">State-of-the-art, multi-layered authentication, designed for the unique behavior of every person.</p>  
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-5.svg'} className="services-container-img" alt="Financial Services display"/>
                        <h3 className="services-heading-subtitle">ID Theft Protection Services</h3>
                        <p className="services-text">Customers can monitor their identity 24/7 and respond to suspicious activity from our easy-to-use online platform.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-6.svg'} className="services-container-img" alt="Cardholder Services display"/>
                        <h3 className="services-heading-subtitle">Cyber Security Services</h3>
                        <p className="services-text">Take advantage of tips and resources designed to help protect your business in our data-dependent, connected world.</p>
                    </div>
              </Link>
         </div>
      </div>
    </div>
  );
}

export default Services;
