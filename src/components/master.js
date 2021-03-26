import React, { useState, useEffect } from "react";
import Renderfinalcontent from "./starter.js";
import Renderfinaltabcomponent from "./tabs.js";

import Axios from "axios";

const Rendermastercomponent = props => {
  const [getMonths, setGetMonths] = useState([]);
  const [showTabContent1, setShowTabContent1] = useState(true);
  const [showTabContent2, setShowTabContent2] = useState(false);
  const [showTabContent3, setShowTabContent3] = useState(false);
  const [showListData, setShowListData] = useState("");
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
    setShowListData(getValue);
    // console.log(getValue);
  };

  function handleHomeTab() {
    setShowTabContent1(true);
    setShowTabContent2(false);
    setShowTabContent3(false);
    setShowListData("");
  }
  function handleAboutTab() {
    setShowTabContent1(false);
    setShowTabContent2(true);
    setShowTabContent3(false);
    setShowListData("");
  }
  function handleContactTab() {
    setShowTabContent1(false);
    setShowTabContent2(false);
    setShowTabContent3(true);
    setShowListData("");
  }

  return (
    <>
      <Renderfinalcontent
        title="API Result"
        getMonths={getMonths}
        fetchResult={fetchResult}
        loadResult={loadResult}
      />
      <Renderfinaltabcomponent
        showTabContent1={showTabContent1}
        showTabContent2={showTabContent2}
        showTabContent3={showTabContent3}
        handleHomeTab={handleHomeTab}
        handleAboutTab={handleAboutTab}
        handleContactTab={handleContactTab}
        showListData={showListData}
      />
    </>
  );
};

export default Rendermastercomponent;
