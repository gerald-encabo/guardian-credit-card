import axios from 'axios';

const API_URL = '/users';

// SignUp user
const signup = async (userData) => {
  const response = await axios.post(API_URL + '/signup', userData);

  // Store user data in local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

// SignIn user
const signin = async (userData) => {
  const response = await axios.post(API_URL + '/signin', userData);

  // Store user data in local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

// SignOut user
const signout = () => {

  // Remove user data in localstorage
  localStorage.removeItem('user');
}

const authService = { signup, signin, signout }

export default authService;