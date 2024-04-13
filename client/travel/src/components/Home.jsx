import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function navbar() {

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  function handleSearch(e) {  
    e.preventDefault();
    navigate(`/search?city=${city}`);
  }

  return (
    <>
      <div className=" overflow-y-hidden">
        <nav className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex-shrink-0">
            <span className=" text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-pink-500 ml-8">
              Travel Amigo.
            </span>
          </div>

          <div className="flex-grow text-center text-lg m-auto">
            <a href="#" className="text-white mx-7 hover:text-gray-300">
              Explore
            </a>
            <a href="#" className=" text-white mx-7 hover:text-gray-300">
              Your Trips
            </a>
          </div>

          <div className=" mr-10">
            <button className=" font-semibold bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-800">
              Sign In
            </button>
          </div>
        </nav>


        {/* hero section */}
        <div className="hero bg-gray-800 h-full">
          <div
            className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center p-10"
            style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
          >
            <h1 className="text-7xl font-extrabold mb-10">
              Planning Your Dream Trip?
            </h1>
            <p className="text-2xl mb-28 text-center">
              Search for your favourite destinations
            </p>
            <div className="flex items-center max-w-lg w-full bg-white rounded-lg overflow-hidden">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 h-4 w-5 ml-4" />
            <input
              type="text"
              placeholder="Enter Your Destinations..."
              className="flex-grow px-4 py-6 text-gray-950 bg-transparent border-none focus:outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="bg-gray-900 text-white px-6 py-7 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleSearch}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
