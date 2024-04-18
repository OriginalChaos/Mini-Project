import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import EnquiryForm from './EnquiryForm';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" Component={SignupForm} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/home" Component={HomePage} />
        <Route path="/products" Component={ProductsPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/Enquiry" Component={EnquiryForm} />
      </Routes>
    </>
  );
}

export default App;
