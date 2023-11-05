import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="krishna flex justify-center text-white  p-4 absolute w-full teal-600 px]:hidden border-4 bg-black border-teal-600  bottom-[1px] text-white max-[600px]:fixed  max-[600px]:p-3 ">
      <div className="flex text-white">
        <div className="flex relative -top-[3px] text-white">
          <a href="https://github.com/Saroj-Kumarr">
            <FaGithubSquare className="m-1 text-2xl rounded-xl" />
          </a>
          <FaLinkedin className="m-1 text-sky-500 text-2xl rounded-xl" />
          <FaInstagramSquare className="m-1 texteal-600  text-2xl rounded-xl" />
        </div>
        <div className="font-bold text-white">
          | Developed by ❤️ Saroj <span className="text-teal-600 ">Kumar</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
