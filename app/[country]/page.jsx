"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from "next/navigation";
import countries from "../../data.json";
import Link from "next/link";

export default function Country() {
  const params = useParams();
  const country = countries.find(
    (con) => con.name === decodeURIComponent(params?.country)
  );

  const BorderNames = (border, countries) => {
    return border?.map(
      (code) => countries.find((c) => c.alpha3Code === code)?.name || code
    );
  };

  return (
    <div className="px-5 py-10 md:px-10 lg:px-20">
     
      <Link href="/">
        <button className="px-6 py-2 flex items-center gap-2 rounded shadow-md bg-elementBackground hover:scale-105 transition">
          <IoIosArrowRoundBack size={20} /> Back
        </button>
      </Link>

   
      <div className="mt-12 flex flex-col lg:flex-row gap-16 lg:items-center">
        
        <div className="flex-1">
          <img
            src={country.flags.svg}
            alt={country.name}
            className="w-full max-w-[600px] mx-auto rounded shadow-md object-cover"
          />
        </div>

      
        <div className="flex-1 text-sm md:text-base lg:text-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {country?.name}
          </h2>

         
          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                <span className="dark:text-gray-300">{country?.nativeName}</span>
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                <span className="dark:text-gray-300 ">
                  {country?.population.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                <span className="dark:text-gray-300">{country?.region}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                <span className="dark:text-gray-300">{country?.subregion}</span>
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                <span className="dark:text-gray-300">{country?.capital}</span>
              </p>
            </div>

            {/* Right side */}
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                <span className="dark:text-gray-300">
                  {country?.topLevelDomain}
                </span>
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                <span className="dark:text-gray-300">
                  {country?.currencies.map((cur, i) => (
                    <span key={i}>
                      {cur.name}
                      {i < country.currencies.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                <span className="dark:text-gray-300">
                  {country?.languages?.map((lang, i) => (
                    <span key={i}>
                      {lang.name}
                      {i < country.languages.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold mb-3">Border Countries:</h2>
            {country.borders && country.borders.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {BorderNames(country.borders, countries)?.map((border, i) => (
                  <li
                    className="py-2 px-5 rounded bg-elementBackground shadow-md hover:scale-105 transition"
                    key={i}
                  >
                    {border}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="dark:text-gray-300">No border</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
