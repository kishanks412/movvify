import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  
  const langKey = useSelector(store => store.config.lang) 
  return (
    <div className="pt-[8%] flex justify-center">
      <form className=" w-1/2 bg-black bg-opacity-50 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 text-black"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
