import React, { useState } from "react";
import { education } from "./Dataset";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import border from "../src/Images/border.jpg";

function Swami() {
  const [quotes, setQuotes] = useState("");

  const educationQuotes = education;

  function getRandomQuote(educationQuotes) {
    const x = Math.floor(Math.random() * 100 + 1);

    const quote = educationQuotes.filter((obj) => {
      return obj.id == x;
    });

    setQuotes(quote);
  }

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="">
        {quotes && (
          <div className="test h-60 w-[470px] font-bold tracking-widest">
            <img
              className="w-full border-2 border-[#01F479] w-[470px]"
              src="https://img.freepik.com/premium-vector/colorful-flowers-background_311284-20.jpg?w=1060"
              alt="border"
            />

            <h1 className="relative text-[#A2678A] -top-48 mx-16 left-2">
              <FaQuoteLeft className="inline relative -top-2 text-[#01F479]" />{" "}
              {quotes[0].quote}
              <FaQuoteRight className="inline relative top-[3px] text-[#01F479]" />
            </h1>
          </div>
        )}
        <button
          onClick={() => getRandomQuote(educationQuotes)}
          className="button-85 tracking-widest relative top-10 "
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default Swami;
