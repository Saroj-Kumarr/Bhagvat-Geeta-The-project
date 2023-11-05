import React from "react";
import { Link } from "react-router-dom";
import QuoteBox from "./QuoteBox";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";
import pic7 from "../Images/pic7.jpg";
import pic8 from "../Images/pic8.jpg";

function Body() {
  const QuoteTypes = [
    {
      type: "Bhagavad gita",
      imgsrc: pic1,
    },
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
      <div className="flex items-center justify-center flex-wrap -mt-6 w-[87%] ml-24 max-[600px]:relative max-[600px]:-left-10 max-[600px]:ml-16 max-[600px]:mb-28">
        {QuoteTypes.map((obj, index) => {
          return (
            <Link to={"/" + index}>
              <QuoteBox name={obj.type} imgsrc={obj.imgsrc} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
