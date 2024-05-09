import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FlagsComponent.css";

const apiEndPoint = "https://restcountries.com/v3.1/all";
const FlagsComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiEndPoint);
      if (response) {
        setData(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Flags</h1>
      <div className="flagsSection">
        {data.map((flag) => {
          return (
            <div className="flagComponent">
              <img
                src={flag.flags.png}
                alt={flag.flags.alt}
                width="100"
                height="80"
              />
              <span>{flag.name.common}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlagsComponent;
