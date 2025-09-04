"use client";
import Link from "next/link";
import SeachchBar from "./compnonet/SearchBar";
import { createContext, useEffect, useState } from "react";
import RegionFilter from "./compnonet/RegionFilter";

export const CountryContext = createContext();

export default function Home() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api`);
      const data = await res.json();
      setAllCountries(data);
      setCountries(data); 
    };
    fetchData();
  }, []);

  return (
    <CountryContext.Provider value={{ allCountries, setCountries }}>
      <div className=" bg-background  mt-10 px-5 md:px-10 lg:px-20">
        <div className=" mb-5 md:flex justify-between ">
          <SeachchBar />
          <RegionFilter />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-elementBackground rounded-xl shadow-2xl group"
            >
              <Link href={`/${country.name}`}>
                <div className="overflow-hidden">
                  <img
                    src={country.flags.png}
                    alt={country.name}
                    className="w-full h-[200px] rounded-t-xl object-cover transform transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <div className="p-5 text-sm">
                  <h2 className="font-bold text-lg dark:text-white">
                    {country.name}
                  </h2>
                  <p>
                    Population:{" "}
                    <span className="dark:text-gray-300">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    Region:{" "}
                    <span className="dark:text-gray-300">{country.region}</span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span className="dark:text-gray-300">
                      {country.capital}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CountryContext.Provider>
  );
}
