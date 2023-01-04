import React from 'react'
import img from './home1.jpg'
import './home.css'


const Home = () => {
  return (
    <div className=' home' id='home'>
    <div className='homes' >
        
        
        <div className='home_left'>
    <img src={img} alt=''/>
</div>
<div className='home_right'>
    <div className='home_up'>
        <h1>About Us</h1>
        <h4>
ABC Consultants is the pioneer of organised recruitment in India. Our roots in management consulting enable us to bring a unique approach to recruitment.</h4>
        <button className='readmore1'>Read more</button>
    </div>
    <div className='home_down'>
        <h1>Services</h1>
        <h4>We provide a range of talent acquisition services by leveraging our domain knowledge built over four decades.</h4>
        <button className='readmore1'>Read more</button>
    </div>
</div>
</div>
</div>
    
  )
}

export default Home