import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout, reset } from '../features/authSlice';
import { SiAdguard } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Button from './Button';
import './Navbar.scss';

function Navbar() {

    // Handle button action
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    // Identify current user through local storage
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

     // Call dispatch logout & reset and then redirect to homepage
    const onSignout = () => {
        dispatch(signout());
        dispatch(reset());
        navigate('/');
        closeMobileMenu();
    }

    return (
        <>
           <IconContext.Provider value={{color: '#fff'}}>
              <div className="navbar">
                    <div className="navbar-container container">
                        <div className="navbar-container-left">
                            <Link to='/' className="navbar-logo" onClick={ closeMobileMenu }>
                                <SiAdguard className="navbar-icon" />Guardian
                            </Link>
                            <div className="menu-icon" onClick={handleClick}>
                                { click ? <FaTimes /> : <FaBars /> }
                            </div>
                            <ul className={ click ? 'navbar-menu active left' : 'navbar-menu' }>
                                <li className="navbar-item">
                                    <Link to='/services' className='navbar-links' onClick={closeMobileMenu} > Services </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to='/products' className='navbar-links' onClick={closeMobileMenu} > Products </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to='/pricing' className='navbar-links' onClick={closeMobileMenu} > Pricing </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-container-right">
                            <ul className={ click ? 'navbar-menu active right' : 'navbar-menu' }>
                                    { 
                                        user ? (                                          
                                                button ? (
                                                    <>
                                                        <li>
                                                            <span className="navbar-links">Hi {user.name}</span>
                                                        </li>
                                                        <li className="navbar-btn">
                                                            <Link to='/' className="btn-link" onClick={onSignout}>
                                                                <Button buttonStyle='btn-secondary'>Sign Out</Button>
                                                            </Link>
                                                        </li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li className="navbar-btn">
                                                            <Link to='/' className="btn-link" onClick={onSignout}>
                                                                <Button buttonStyle='btn-secondary' buttonSize='btn-mobile'>Sign Out</Button>
                                                            </Link>
                                                        </li>
                                                    </>
                                                )
                                        ) : (
                                                button ? (
                                                    <>
                                                        <li className="navbar-item">
                                                            <Link to='/signup' className='navbar-links' onClick={closeMobileMenu} >
                                                                Register
                                                            </Link>
                                                        </li>
                                                        <li className="navbar-btn">
                                                            <Link to='/signin' className="btn-link" onClick={closeMobileMenu}>
                                                                <Button buttonStyle='btn-secondary'>Sign In</Button>
                                                            </Link>                                    
                                                        </li>
                                                    </>
                                                ) : (
                                                    <>
                                                        <li className="navbar-item">
                                                            <Link to='/signup' className='navbar-links' onClick={closeMobileMenu} >
                                                                Register
                                                            </Link>
                                                        </li>
                                                        <li className="navbar-btn">
                                                            <Link to='/signin' className="btn-link" onClick={closeMobileMenu}>
                                                                <Button buttonStyle='btn-secondary' buttonSize='btn-mobile'>Sign In</Button>
                                                            </Link>
                                                        </li>
                                                    </>
                                                )
                                        )
                                    }
                            </ul>
                        </div>
                  </div>
              </div>
           </IconContext.Provider>
        </>
    )
}

export default Navbar;
