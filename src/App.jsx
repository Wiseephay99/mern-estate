
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/profile';
import Header from './components/header';


 export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/sign-in" element={<SignIn />}> </Route>
    <Route path="/sign-up" element={<SignUp />}> </Route>
    <Route path="/about" element={<About />}> </Route>
    <Route path="/profile" element={<Profile />}> </Route>
  </Routes>
  </BrowserRouter>
  )
}
