import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Quotes from "./Dataset";
import { useParams } from "react-router";

function Bhagavad() {
  const [quotes, setQuotes] = useState([{
    id: "62",
    quote:
      "जितना ज्यादा गलतियां हो सके उतनी ज्यादा गलतियां करो। बस एक बात रखना फिर से वही गलती मत करना और देखना, तुम प्रगति कर रहे होगे।  ",
  }]);

  const { id } = useParams();

  let storeQuotes = "";
  

  if (id == 0) {
    storeQuotes = Quotes[0];
  } else if (id == 1) {
    storeQuotes = Quotes[1];
  } else if (id == 2) {
    storeQuotes = Quotes[2];
  } else if (id == 3) {
    storeQuotes = Quotes[3];
  } else if (id == 4) {
    storeQuotes = Quotes[4];
  } else if (id == 5) {
    storeQuotes = Quotes[5];
  } else if (id == 6) {
    storeQuotes = Quotes[6];
  } else {
    storeQuotes = Quotes[7];
  }

  function getRandomQuote(bhagvadQuotes) {
    const x = Math.floor(Math.random() * 50 + 1);

    const quote = bhagvadQuotes.filter((obj) => {
      return obj.id == x;
    });

    setQuotes(quote);
  }

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="max-[600px]:mt-20">
        {/* {quotes && (
          <div className="test h-60 w-[490px] font-bold tracking-widest max-[600px]:w-full max-[600px]:text-[13px] ">
            <img
              className="w-full border-4 border-teal-600 w-[490px]"
              src="https://img.freepik.com/premium-vector/colorful-flowers-background_311284-20.jpg?w=1060"
              alt="border"
            />

            <h1 className="relative text-[#01F479] -top-48 mx-16 left-2 max-[600px]:mt-8">
              <FaQuoteLeft className="inline relative -top-2 text-[#F4434D]" />{" "}
              {quotes[0].quote}
              <FaQuoteRight className="inline relative top-[3px] text-[#F4434D]" />
            </h1>
          </div>
        )} */}
        <div className="test h-60 w-[490px] font-bold tracking-widest max-[600px]:w-full max-[600px]:text-[13px] ">
          <img
            className="w-full border-4 border-teal-600 w-[490px]"
            src="https://img.freepik.com/premium-vector/colorful-flowers-background_311284-20.jpg?w=1060"
            alt="border"
          />

          <h1 className="relative text-[#01F479] -top-48 mx-16 left-2 max-[600px]:mt-8">
            <FaQuoteLeft className="inline relative -top-2 text-[#F4434D]" />{" "}
            {quotes[0].quote}
            <FaQuoteRight className="inline relative top-[3px] text-[#F4434D]" />
          </h1>
        </div>
        //
        <button
          onClick={() => getRandomQuote(storeQuotes)}
          className="border-2 border-teal-600 border-t-2 border-white bg-teal-600  durapink-600 w-full p-1 font-bold  text-white text-lg"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default Bhagavad;
