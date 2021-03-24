import React, { useState, useEffect } from "react";
import Renderfinalcontent from "./starter.js";
import Axios from "axios";

const Rendermastercomponent = props => {
  const [getMonths, setGetMonths] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loadResult, setLoadResult] = useState(false);
  useEffect(() => {
    setLoadResult(true);
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setGetMonths(response.data);
      setLoadResult(false);
    });
  }, []);

  const fetchResult = getValue => {
    setLoadResult(false);
    // console.log(getValue);
  };

  return (
    <>
      <Renderfinalcontent
        title="API Result"
        getMonths={getMonths}
        fetchResult={fetchResult}
        loadResult={loadResult}
      />
    </>
  );
};

export default Rendermastercomponent;
