import React from "react";
import { GiBookAura } from "react-icons/gi";

function Header() {
  return (
    <div className="border-teal-600 krishna flex px-10 bg-black border-4 p-3 justify-between">
      <div className="flex  max-[600px]:ml-9  ">
        <GiBookAura className="text-teal-600 text-4xl relative top-[1px]" />
        <h1 className="text-white ml-2 text-3xl font-bold text-white">Saroj</h1>
        <h1 className="text-teal-600 ml-2 font-bold text-3xl">Kumar</h1>
      </div>

      <div className="max-[600px]:hidden">
        <ul className="flex ">
          <li className="border-2 border-white  text-white  bg-teal-600 p-1 font-bold m-2 hover:bg-white hover:text-teal-600 hover:border-teal-600 duration-500 px-2">
           Home
          </li>
          <li className="border-2 border-white text-white bg-teal-600 p-1 font-bold m-2 hover:bg-white hover:text-teal-600 hover:border-teal-600 duration-500 px-2">
            About
          </li>
          <li className="border-2 border-white text-white bg-teal-600 p-1 font-bold m-2 hover:bg-white hover:text-teal-600 hover:border-teal-600 duration-500 px-2">
           Contact
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
