"use client";
import { IoIosSearch } from "react-icons/io";

import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../page";

export default function SeachchBar() {
    const{allCountries,setCountries}= useContext(CountryContext)
  const [search, setSearch] = useState("");
  useEffect(()=>{
    const filteredCountry= allCountries.filter(country=>
        country.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    setCountries(filteredCountry)
  },[search,allCountries,setCountries])
  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()} className=" flex items-center px-3 space-x-2 py-2 mb-8 bg-elementBackground max-w-[400px] md:w-[400px] rounded shadow-2xl">
        <IoIosSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for a country..."
          className=" outline-0 w-full"
          
        />
      </form>
    </div>
  );
}
