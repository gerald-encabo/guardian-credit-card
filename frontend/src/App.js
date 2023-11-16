<<<<<<< HEAD
import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
              <Route path='*' exact element={<Navigate to='/' />} />
              <Route path='/' exact element={<Home />} />
              <Route path='/products' exact element={<Products />} />
              <Route path='/services' exact element={<Services />} />
              <Route path='/pricing' exact element={<Pricing />} />
              <Route path='/signin' exact element={<SignIn />} />
              <Route path='/signup' exact element={<SignUp />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

=======
import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
              <Route path='*' exact element={<Navigate to='/' />} />
              <Route path='/' exact element={<Home />} />
              <Route path='/products' exact element={<Products />} />
              <Route path='/services' exact element={<Services />} />
              <Route path='/pricing' exact element={<Pricing />} />
              <Route path='/signin' exact element={<SignIn />} />
              <Route path='/signup' exact element={<SignUp />} />
        </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

>>>>>>> 91db7676131ab5480e1325f7f50bf3e7184f67b6
export default App;