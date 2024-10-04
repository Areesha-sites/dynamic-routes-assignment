import React from "react";
import Link from "next/link";
import { AboutCountries } from "../../../../types/types";
const CountriesName = ({ params }: { params: { countries_name: string } }) => {
  const countryDetails: AboutCountries[] = [
    {
      name: "Pakistan",
      population: 251269164,
      capital: "Islamabad",
    },
    {
      name: "canada",
      population: 38000000,
      capital: "Ottawa",
    },
    {
      name: "India",
      population: 139409038,
      capital: "New Delhi",
    },
    {
      name: "Germany",
      population: 83100000,
      capital: "Berlin",
    },
    {
      name: "Australia",
      population: 25687041,
      capital: "Canberra",
    },
  ];
  const countries = countryDetails.find(
    (country) =>
      country.name.toLowerCase() === params.countries_name.toLowerCase()
  );

  if (!countries) {
    return <h1>Country Not Found!</h1>;
  }
  return (
    <>
      <div className="text-center pt-28 text-2xl min-h-screen bg-purple-50 ">
        <div>
          <h1 className="font-semibold text-purple-900 italic text-3xl pb-6">
            Countries Details!
          </h1>
          <div className="flex justify-center">
            <div className=" border-purple-200 hover:scale-105 transition-all cursor-pointer rounded-3xl p-10 shadow-xl shadow-gray-200 bg-gradient-to-tl from-purple-200 to-purple-300 ">
              <p>
                <span className="font-semibold text-purple-800 pr-4">
                  Name:
                </span>
                <span className="italic text-purple-600">{countries.name}</span>
              </p>
              <p>
                <span className="font-semibold text-purple-800 pr-4">
                  Population:
                </span>
                <span className="italic text-purple-600">
                  {countries.population}
                </span>
              </p>
              <p>
                <span className="font-semibold text-purple-800 pr-4">
                  Capital:
                </span>
                <span className="italic text-purple-600">
                  {countries.capital}
                </span>
              </p>
            </div>
          </div>
        </div>
        <button className="text-lg text-center mt-7 px-4 mx-4 p-1 rounded-xl border-2 bg-purple-700 text-white hover:scale-105 transition-all duration-300 hover:bg-white hover:text-purple-700 hover:font-bold font-bold">
          <Link href="/countries" className="flex items-center justify-center">
            Back to the List
          </Link>
        </button>
      </div>
    </>
  );
};

export default CountriesName;
