// Slacesite.js

import React from "react";
import { Link } from "react-router-dom";
import card from "./sitesData.json";

const Slacesite = () => {
  return (
    <div id="Eachsites" className="bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {card.map((data) => (
            <div key={data.id}>
              {/* Use Link to navigate to the Details page */}
              <Link to={`/Eachsites/${data.id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={data.images} alt={data.location} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.location}</div>
                    <p className="text-gray-700 text-base">{data.version}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {data.date.map((date, dateIndex) => (
                      <span
                        key={dateIndex}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slacesite;
