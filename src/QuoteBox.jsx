import React from "react";

function QuoteBox({ imgsrc, name }) {
  return (
    <div className="krishna h-52 w-60 m-5 ml-2 mt-12">
      <img src={imgsrc} className="w-full h-52" alt="img" />
      <button className="button-85">{name}</button>
    </div>
  );
}

export default QuoteBox;
