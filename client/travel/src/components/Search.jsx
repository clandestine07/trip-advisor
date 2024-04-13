import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export default function Search({props}) {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const url = "http://localhost:3000/search/city";
        const options = {
          method: "GET",
          url: url,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          params: {
            city: city,
          },
        };
        const response = await axios(options);
        if (response.status === 200) {
          console.log('Response:', response.data)
          setCities(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  }, [city]);
  return (
    <>
      <div>
        <h1>Search Results for "{city}"</h1>
        <ul>
          {cities.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
