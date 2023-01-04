import React from 'react'
import './footer.css'
import { FiSend } from 'react-icons/fi';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='network'>
      <h1>Our Network</h1>

    </div>
    <div className='div'>
    <div className='corporate'><h3>Corporate Office</h3>
    
    <address>
      1st Floor, Eros Corporate Tower<br/>
      Nehru Place,<br/>
      New Delhi-101019
    </address>
    <p>085-132567</p>
    <p>info@abcconsultancy.in</p>
    </div>


    <div className="company">
        <h3>Company</h3>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>


    <div className='contact'><h3>Contact us</h3>
   
                        
                        <div class="footerform">
                            <p>If any quries contact us</p>
                        </div>
                        
                            <form action="#" className='form'>
                                <input  className='inp' type="text" placeholder="Email Address"/>
                                <button className='send'><i> <FiSend/></i></button>
                            </form>
                        </div>
                    </div>
                </div>
   
  
  )
}

export default Footer