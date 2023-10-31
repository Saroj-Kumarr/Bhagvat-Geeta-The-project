import React, { useState } from "react";
import { chanakya } from "./Dataset";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import border from "../src/Images/border.jpg";

function Chanakya() {
  const [quotes, setQuotes] = useState("");

  const chanakyaQuotes = chanakya;

  function getRandomQuote(chanakyaQuotes) {
    const x = Math.floor(Math.random() * 103 + 1);

    const quote = chanakyaQuotes.filter((obj) => {
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

            <h1 className="relative text-[#10b981] -top-48 mx-16 left-2">
              <FaQuoteLeft className="inline relative -top-2 text-[#01F479]" />{" "}
              {quotes[0].quote}
              <FaQuoteRight className="inline relative top-[3px] text-[#01F479]" />
            </h1>
          </div>
        )}
        <button
          onClick={() => getRandomQuote(chanakyaQuotes)}
          className="button-85 tracking-widest relative top-10 "
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default Chanakya;
