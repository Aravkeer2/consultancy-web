import React from 'react'
import { MdOutlineFlight } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { MdRadio } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { GiElectric } from 'react-icons/gi';
import { MdOutlineSavings } from 'react-icons/md';
import { AiOutlineCoffee } from 'react-icons/ai';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaIndustry } from 'react-icons/fa';
import { GiStoneBridge } from 'react-icons/gi';
import { GrInternetExplorer } from 'react-icons/gr';
import { FaDropbox } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

import './industries.css'
const Industries = () => {
  return (
    <div className='in' id='ip'>
        <div className='in_head'>
            <h1>Industries Practices</h1>
        </div>
        <div className='in_bottom'>
            <h4>
            We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. In order to provide clients with specialized recruiting solutions, ABC has developed expertise in the following industry segments:
            </h4>
           
            <div className='threeway'>
            <div className='Cone'>
                <div><i><MdOutlineFlight/></i><h1>AeroSpace </h1></div>
                <div><i><AiFillCar/></i><h1>Automobile</h1></div>
                <div><i><MdRadio/></i><h1>Build Materials</h1></div>
                <div><i><FaHandsHelping/></i><h1>Development</h1></div>
                <div><i><ImBooks/></i><h1>Education</h1></div>
            </div>
            <div className='Ctwo'>
            <div><i><GiElectric/></i><h1>Electrical</h1></div>
                <div><i><MdOutlineSavings/></i><h1>Financial</h1></div>
                <div><i><AiOutlineCoffee/></i><h1>FMCG</h1></div>
                <div><i><MdOutlineHealthAndSafety/></i><h1>Healthcare</h1></div>
                <div><i><FaIndustry/></i><h1>Industrial</h1></div>
                

            </div>
            <div className='Cthree'>
            <div><i><GiStoneBridge/></i><h1>Infrastructure</h1></div>
                <div><i><GrInternetExplorer/></i><h1>Internet</h1></div>
                <div><i><FaDropbox/></i><h1>Logistics</h1></div>
                <div><i><MdPermMedia/></i><h1>Media</h1></div>
                <div><i><BsFillTelephoneFill/></i><h1>Telecom</h1></div>
               


            </div>
            </div>
        </div>
    </div>
  )
}

export default Industries