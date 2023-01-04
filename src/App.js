import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aboutus from './components/AboutUs/About'
import Footer from './components/Footer/Footer.jsx'
import In from './components/Industries/Industries'
import Jobs from './components/jobs/jobs'
import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      
      <Home/>
      <div className='containerbox'>
        <h1 className='impact'>Creating impact</h1>
        <div className='counts'>
        <div className='first'><h1>50+</h1><h4>Years of leadership</h4></div>
        <div className='second'><h1>150K</h1><h4>career made till date</h4></div>
        <div className='third'><h1>550+</h1><h4>Consultants</h4></div>
        <div className='fourth'><h1>34+</h1><h4>Industries covered</h4></div>
        </div>
        
        
      </div>
      <Aboutus/>
      <In/>
      <Jobs/>
      <Footer/>
      

      
    </div>
  )
}

export default App