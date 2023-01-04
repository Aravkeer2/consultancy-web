import React from 'react'
import './jobs.css'
const jobs = () => {
  return (
    <div className='jobs' id='jobs'>
        <div className='jobs_header'>
            <h1>Find the Perfect Job</h1>
        </div>
        <div className='jobs_bottom'>
            <h4>Only a select few mandates being handled by us are posted on our website and other online platforms. A vast majority of jobs aren’t in the public domain. Be a part of our searchable centralized database by sending us your details.</h4>
            <div className='button_submit'>
                <button>Submit your CV</button>
            </div>
            <div className='box'>
            <div className='job_container'>
                <div className='title'>
                    
                <input type="text" placeholder="Search jobs"/>
                </div>
                <div className='location'>
                <input type="text" placeholder="Location"/>

                </div>
                <div className='search_btn'>
<button>Search</button>
                </div>
                
            </div>
            <div className='jobs_jobs'>
<h1>Current Openings</h1>

<div className='divide'>
    <div className='j1'><h3 className='j'>Senior Sales Manager</h3><button className='b1'>Apply</button></div>

    <div className='j2'><h3 className='j'>Software Sales Manager</h3><button className='b1'>Apply</button></div>

    <div className='j3'><h3 className='j'>Dot Net Programmer</h3><button className='b1'>Apply</button></div>

    <div className='j4'><h3 className='j'>Java Trainer</h3><button className='b1'>Apply</button></div>

    <div className='j5'><h3 className='j'>Senior Sales</h3><button className='b1'>Apply</button></div>

    <div className='j6'><h3 className='j'>Lead-Network Security</h3><button className='b1'>Apply</button></div>
</div>

                </div>
                </div>
            
                    </div>
    </div>
  )
}

export default jobs