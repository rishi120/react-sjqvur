import React, { useState, useEffect, useRef } from "react";
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
  const focusHomeBackground = useRef(0);
  const focusAboutBackground = useRef(0);
  const focusContactBackground = useRef(0);
  useEffect(() => {
    setLoadResult(true);
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setGetMonths(response.data);
      setLoadResult(false);
    });
    focusHomeBackground.current.style.backgroundColor = "blue";
  }, []);

  const fetchResult = getValue => {
    setLoadResult(false);
    setShowListData(getValue);
  };

  function handleHomeTab() {
    setShowTabContent1(true);
    setShowTabContent2(false);
    setShowTabContent3(false);
    setShowListData("");
    focusHomeBackground.current.style.backgroundColor = "blue";
    focusAboutBackground.current.style.backgroundColor = "#111";
    focusContactBackground.current.style.backgroundColor = "#111";
  }
  function handleAboutTab() {
    setShowTabContent1(false);
    setShowTabContent2(true);
    setShowTabContent3(false);
    setShowListData("");
    focusAboutBackground.current.style.backgroundColor = "blue";
    focusHomeBackground.current.style.backgroundColor = "#111";
    focusContactBackground.current.style.backgroundColor = "#111";
  }
  function handleContactTab() {
    setShowTabContent1(false);
    setShowTabContent2(false);
    setShowTabContent3(true);
    setShowListData("");
    focusContactBackground.current.style.backgroundColor = "blue";
    focusAboutBackground.current.style.backgroundColor = "#111";
    focusHomeBackground.current.style.backgroundColor = "#111";
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
        focusHomeBackground={focusHomeBackground}
        focusAboutBackground={focusAboutBackground}
        focusContactBackground={focusContactBackground}
      />
    </>
  );
};

export default Rendermastercomponent;
