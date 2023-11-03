import React from "react";

function QuoteBox({ imgsrc, name }) {
  return (
    <div className="krishna h-52 w-60 m-5 ml-2 mt-12">
      <img
        src={imgsrc}
        className="w-full h-52 border-4 border-teal-600"
        alt="img"
      />
      <button className="border-2 border-teal-600 border-t-2 border-t-white bg-teal-600 hover:bg-white hover:border-teal-600 durapink-600 w-full p-1 font-bold hover:text-teal-600 text-white text-lg">
        {name}
      </button>
    </div>
  );
}

export default QuoteBox;
