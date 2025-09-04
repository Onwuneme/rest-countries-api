"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../page";

export default function RegionFilter() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { allCountries, setCountries } = useContext(CountryContext);
  useEffect(() => {
    const filteredCountries = selectedRegion
      ? allCountries.filter(
          (country) =>
            country.region.toLocaleLowerCase() ==
            selectedRegion.toLocaleLowerCase()
        )
      : allCountries;

    setCountries(filteredCountries);
  }, [setCountries, selectedRegion, allCountries]);
  return (
    <div className=" relative z-20 w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" py-2 w-full text-center rounded bg-elementBackground flex  items-center justify-between px-5 shadow-2xl"
      >
        <div>{selectedRegion === "" ? "filter by Region" : selectedRegion}</div>
        <IoIosArrowDown className={isOpen && "rotate-180"} />
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" absolute flex flex-col  bg-elementBackground w-full mt-1 rounded py-2 shadow-2xl "
        >
          <button onClick={() => setSelectedRegion("")}>All</button>
          <button onClick={() => setSelectedRegion("Africa")}>Africa</button>
          <button onClick={() => setSelectedRegion("Americas")}>America</button>
          <button onClick={() => setSelectedRegion("Europe")}>Europe</button>
          <button onClick={() => setSelectedRegion("Asia")}>Asia</button>
        </div>
      )}
    </div>
  );
}
