import React from 'react';
import { Link } from 'react-router-dom';
import Button  from './Button';
import './HeroSection.scss';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, imgStart, img, alt, pageDirect
    }) {
    return (
        <div className={lightBg ? 'home-hero-section' : 'home-hero-section darkBg'}>
            <div className="container">
                <div className="row home-hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>

                    <div className="col">
                        <div className="home-hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home-hero-subtitle' : 'home-hero-subtitle dark'}>{description}</p>
                            <Link to={pageDirect}>
                                <Button buttonSize='btn-wide' buttonColor='blue'>
                                   {buttonLabel}
                                </Button>
                            </Link>
                        </div>    
                    </div>

                    <div className="col">
                       <div className="home-hero-img-wrapper">
                           <img src={process.env.PUBLIC_URL + img} alt={alt} className="home-hero-img" />
                       </div>
                    </div>    

                </div>
            </div>
        </div>
    );
}

export default HeroSection
