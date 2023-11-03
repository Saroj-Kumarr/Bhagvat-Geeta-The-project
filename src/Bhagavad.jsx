import React, { useState } from "react";
import { bhagavad } from "./Dataset";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import border from "../src/Images/border.jpg";
import Quotes from "./Dataset";
import { useParams } from "react-router";

function Bhagavad() {
  const [quotes, setQuotes] = useState("");

  const {id}=useParams();

  const bhagvadQuotes = Quotes;

  function getRandomQuote(bhagvadQuotes) {
    const x = Math.floor(Math.random() * 50 + 1);

    const quote = bhagvadQuotes.filter((obj) => {
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
              className="w-full border-2 border-[#F4434D] w-[470px]"
              src="https://img.freepik.com/premium-vector/colorful-flowers-background_311284-20.jpg?w=1060"
              alt="border"
            />

            <h1 className="relative text-[#01F479] -top-48 mx-16 left-2">
              <FaQuoteLeft className="inline relative -top-2 text-[#F4434D]" />{" "}
              {quotes[0].quote}
              <FaQuoteRight className="inline relative top-[3px] text-[#F4434D]" />
            </h1>
          </div>
        )}
        //
        <button
          onClick={() => getRandomQuote(bhagvadQuotes[id])}
          className="border-2 border-teal-600 border-t-2 border-white bg-teal-600  durapink-600 w-full p-1 font-bold  text-white text-lg"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default Bhagavad;
