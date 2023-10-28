import React from "react";
import left from "./Images/left.png";
import logo from './Images/logo4.png';
import {GiFlowerEmblem,GiFlowerStar,GiSunflower,GiSpotedFlower } from 'react-icons/gi'
import {PiFlowerLotusFill} from 'react-icons/pi'
 
// GiFlowerEmblem GiFlowerStar GiSunflower GiSpotedFlower  PiFlowerLotusFill

function Header() {
  return (
    <div className="krishna flex justify-between items-center px-10 bg-black">
      <div>
        <img className="h-24" src={left} alt="flute" />
      </div>
      <div className="flex justify-center items-center">
      <GiSunflower  className="text-5xl text-teal-600"/>
      </div>
      <div>
        <img className="h-24" src={logo} alt="logo"/>
      </div>
      <div className="flex justify-center items-center">
      {/* <GiFlowerEmblem className="text-3xl text-green-600"/>
        <GiFlowerStar  className="text-4xl text-pink-600"/> */}
        <GiSunflower  className="text-5xl text-teal-600"/>
        {/* <GiSpotedFlower   className="text-3xl text-pink-600"/>
        <IoMdFlower  className="text-3xl text-purple-600"/>
        <PiFlowerLotusFill   className="text-3xl text-red-600"/> */}


      </div>
      <div><img className="h-24 -rotate-180" src={left} alt="flute" /></div>
    </div>
  );
}

export default Header;
