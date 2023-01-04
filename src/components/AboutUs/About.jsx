import React from 'react'
import img from './about.jpg'
import './about.css'
const About = () => {
  return (
  <div className='about' id='about'>
    
    <div className='about_head'>
        <h1>Building Careers. Building Organisations.</h1>
    </div>
    <div className='about_bottom'>
        <div className='bottom_left'>
            <img src={img} alt=''/>

        </div>
        <div className='bottom_right'>
            <p>Founded in 1969 by Dr Bish Agrawal, ABC Consultants is the pioneer of organized recruitment services in India. Over the past five decades, we have acted as preferred talent acquisition partners to multinationals and leading Indian businesses to emerge as the leading talent solutions provider in India. This combined with our role as trusted consultants for Indian professionals translates into our core capability - Building Careers. Building Organisations.

ABC roots in management consulting bring a unique approach to recruitment at senior and middle management levels .<br/><br/>

We recruit across various industry sectors for multinational corporations as well as leading Indian business houses and have helped shaped the careers of over 1,65,000 professionals in our 50 year history.<br/><br/>

Our network includes 9 offices spread across 8 major Indian cities. We have over 465 consultants who have over 2800 man years of experience with leading Indian and international companies and operate within domain-specialist teams spread across the country, providing customized talent solutions across 25 industry practices.
<br/>
Our network includes 9 offices spread across 8 major Indian cities. We have over 465 consultants who have over 2800 man years of experience with leading Indian and international companies and operate within domain-specialist teams spread across the country, providing customized talent solutions across 25 industry practices.
</p>
            
        </div>
    </div>
    </div>
  )
}

export default About