import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export default function Search({city}) {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/search/city";
        const options = {
          method: "POST",
          url: url,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          data: {
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
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1>Search Results for "{query}"</h1>
        <ul>
          {cities.map((cities) => (
            <li key={cities.id}>{cities.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
