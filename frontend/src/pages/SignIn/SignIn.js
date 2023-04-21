import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { SiAdguard } from 'react-icons/si';
import { toast } from 'react-toastify';
import { signin, reset } from '../../features/authSlice';
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import './SignIn.scss';

function SignIn() {

    // React hook to collect prompt data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // Data collect pass to local variable
    const { email, password } = formData;

    // Initial local variable with router dom & redux library
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);
    
    // Check user status every render
    useEffect(() => {

        if (isError) { 
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch])


    // Function call when user enter value and save it in local state
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // Submitted form collect data and call login function
    const onSubmit = (e) => {
        e.preventDefault();

        const userData = { email, password }

        dispatch(signin(userData));
    }
    
    // Call spinner component when loading is true
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>     
            <div className="signin">
                <div className="signin-wrapper">
                    <div className="signin-container signin-side-1">
                        <Link to='/' className="signin-logo">
                            <SiAdguard />
                        </Link>
                    </div>
                    <div className="signin-container signin-side-2">
                        <p className="signin-heading">Login</p>
                        <form onSubmit={onSubmit} className="signin-form">
                            <label for="email" className="signin-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                className="signin-input"
                                onChange={onChange} 
                                aria-label="Your email"
                                required 
                            />
                            <label for="password" className="signin-label">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"  
                                className="signin-input"
                                value={password}
                                placeholder="Enter password"
                                onChange={onChange}
                                aria-label="Your password"
                                required    
                            />
                            <Button type='submit' buttonSize='btn-wide' buttonColor='blue'>Continue</Button>
                            <Link to='#' className="signin-text">Forgot Password?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
