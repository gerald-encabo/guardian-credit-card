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
                        <p className="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates molestiae incidunt praesentium autem provident.</p>
                      </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-2.svg'} className="services-container-img" alt="Financial Services display"/>
                        <h3 className="services-heading-subtitle">Financial Services</h3>
                        <p className="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam vitae veritatis dolores molestiae corporis, numquam ducimus.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-3.svg'} className="services-container-img" alt="Cardholder Services display"/>
                        <h3 className="services-heading-subtitle">Cardholder Services</h3>
                        <p className="services-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, exercitationem molestias alias totam eaque blanditiis.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-4.svg'} className="services-container-img" alt="Authentication Services display"/>
                        <h3 className="services-heading-subtitle">Authentication Services</h3>
                        <p className="services-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla, modi nam quos ab vel ullam vero.</p>  
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-5.svg'} className="services-container-img" alt="Financial Services display"/>
                        <h3 className="services-heading-subtitle">ID Theft Protection Services</h3>
                        <p className="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam nobis obcaecati provident repellendus.</p>
                    </div>
              </Link>
              <Link to="#" className="services-container-card">
                    <div className="services-container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-6.svg'} className="services-container-img" alt="Cardholder Services display"/>
                        <h3 className="services-heading-subtitle">Cyber Security Services</h3>
                        <p className="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus repellendus ipsa laboriosam at ratione.</p>
                    </div>
              </Link>
         </div>
      </div>
    </div>
  );
}

export default Services;
