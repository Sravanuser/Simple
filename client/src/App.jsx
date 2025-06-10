import React from 'react'
import "./App.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Footer/>
      <Toaster/>
    </div>
  )
}
