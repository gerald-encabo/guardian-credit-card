import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { SiAdguard } from 'react-icons/si';
import { toast } from 'react-toastify';
import { signup, reset } from '../../features/authSlice';
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import './SignUp.scss';

function SignUp() {

     // React hook to collect prompt data
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    // Data collect pass to local variable
    const { name, email, password, password2 } = formData;

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

        if (password !== password2) {
            toast.error('Password do not match');
        } else {
            const userData = { name, email, password, password2 }
    
            dispatch(signup(userData));
        }
    }
    
    // Call spinner component when loading is true
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="signup">
            <div className="signup-wrapper">
                <div className="signup-container signup-side-1">
                    <Link to='/' className="signup-logo">
                        <SiAdguard />
                    </Link>
                </div>
                <div className="signup-container signup-side-2">
                    <p className="signup-heading">Register</p>
                    <form onSubmit={onSubmit} className="signup-form">
                        <label htmlForm="name" className="signup-label">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            vakue={name}
                            placeholder="Enter your name"
                            className="signup-input"
                            onChange={onChange} 
                            required 
                        />
                        <label htmlForm="email" className="signup-label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            className="signin-input"
                            onChange={onChange} 
                            required 
                        />
                        <label htmlForm="password" className="signup-label">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            value={password}
                            placeholder="Enter your password"
                            className="signup-input"
                            onChange={onChange} 
                            required 
                        />
                        <label htmlForm="password2" className="signup-label">Confirm Password</label>
                        <input 
                            id="password2" 
                            type="password" 
                            name="password2" 
                            value={password2}
                            placeholder="Re-enter password"
                            className="signup-input"
                            onChange={onChange} 
                            required 
                        />
                        <Button buttonSize='btn-wide' buttonColor='blue'> Continue </Button>
                        <Link to='#' className="signup-text">Forgot Password?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
