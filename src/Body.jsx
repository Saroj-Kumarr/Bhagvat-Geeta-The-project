import React from 'react'
import logo from './Images/logo5.png'
import pic1 from './Images/pic1.jpg';
import pic2 from './Images/pic2.jpg';
import pic3 from './Images/pic3.jpg';
import pic4 from './Images/pic4.jpg';
import pic5 from './Images/pic5.jpg';

function Body() {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div>
        <img className='h-60 -mt-10 ' src={logo} alt="logo"/>
        </div>
        <div className='flex w-full justify-around'>
            <div className='krishna'>
                <img className='w-80 h-60' src={pic1} alt="pic1"/>
                <button className='button-85'>Get Random Sloka</button>
            </div>
            <div className='krishna'>
                <img className='w-80' src={pic3} alt="pic1"/>
                <button className='button-85'>Get sloka by chapter and sloka no</button>
            </div>
            <div className='krishna'>
                <img className='w-80' src={pic2} alt="pic1"/>
                <button className='button-85'>Get whole chapters overview</button>
            </div>
            <div className='krishna'>
                <img className='w-80 h-60' src={pic4} alt="pic1"/>
                <button className='button-85'>Get indivisual chapter overview</button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Body