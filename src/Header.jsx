import React from "react";
import left from "./Images/left.png";
import logo from "./Images/logo4.png";
import {
  GiFlowerEmblem,
  GiFlowerStar,
  GiSunflower,
  GiSpotedFlower,
} from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import { GiBookAura } from "react-icons/gi";

function Header() {
  return (
    <div className="green-border krishna flex px-10 bg-black border-4 p-3 justify-between">
      <div className="flex">
        <GiBookAura className="green-text green-text text-4xl relative top-[1px]" />
        <h1 className="text-white ml-2 text-3xl font-bold text-white">Saroj</h1>
        <h1 className="green-text green-text ml-2 font-bold text-3xl">Kumar</h1>
      </div>

      <div className="">
        <ul className="flex">
          <li className="border-2 border-white green-text bg-pink-600 p-1 font-bold m-2 hover:bg-white hover:text-pink-600 hover:border-pink-600 duration-500 px-2">
            Pink
          </li>
          <li className="border-2 border-white text-white bg-purple-600 p-1 font-bold m-2 hover:bg-white hover:text-pink-600 hover:border-pink-600 duration-500 px-2">
            Purple
          </li>
          <li className="border-2 border-white text-white bg-sky-600 p-1 font-bold m-2 hover:bg-white hover:text-pink-600 hover:border-pink-600 duration-500 px-2">
            Blue
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
