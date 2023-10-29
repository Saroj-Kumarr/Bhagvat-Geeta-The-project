import React from "react";
import { Link } from "react-router-dom";
import QuoteBox from "./QuoteBox";
import pic1 from "./Images/pic1.jpg";
import pic2 from "./Images/pic2.jpg";
import pic3 from "./Images/pic3.jpg";
import pic4 from "./Images/pic4.jpg";
import pic5 from "./Images/pic5.jpg";
import pic6 from "./Images/pic6.jpg";
import pic7 from "./Images/pic7.jpg";
import pic8 from "./Images/pic8.jpg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Body() {
  const QuoteTypes = [
    {
      type: "Bhagavad gita",
      imgsrc: pic1,
    },
    ,
    {
      type: "Chanakya Niti",
      imgsrc: pic2,
    },
    {
      type: "Gautam Buddha",
      imgsrc: pic3,
    },
    {
      type: "Swami Vivekananda",
      imgsrc: pic4,
    },
    {
      type: "Osho",
      imgsrc: pic5,
    },
    {
      type: "Life",
      imgsrc: pic6,
    },
    {
      type: "Education",
      imgsrc: pic7,
    },
    {
      type: "Abdul kalam",
      imgsrc: pic8,
    },
  ];

  return (
    <>
      <h1 className="button-85 text-center text-lg">
        {" "}
        <AiFillCaretLeft className="inline relative -top-[1px] mr-1" />
        Choose favorite your category <AiFillCaretRight className="inline" />
      </h1>

      <div className="flex items-center justify-center flex-wrap -mt-9 w-[87%] ml-24">
        {QuoteTypes.map((obj, index) => {
          return (
            <Link to={"/" + obj.type}>
              <QuoteBox name={obj.type} imgsrc={obj.imgsrc} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
