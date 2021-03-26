import React, { useRef } from "react";

const Rendertabs = props => {
  return (
    <section className="tab-wrapper">
      <ul>
        <li onClick={props.handleHomeTab} ref={props.focusHomeBackground}>
          Home
        </li>
        <li onClick={props.handleAboutTab} ref={props.focusAboutBackground}>
          About
        </li>
        <li onClick={props.handleContactTab} ref={props.focusContactBackground}>
          Contact
        </li>
      </ul>
    </section>
  );
};

const Rendertabcontent1 = props => {
  const checkTabConten1Status = props.showTabContent1;
  if (checkTabConten1Status) {
    return (
      <section className="tab-content-wrapper">
        <div className="tab-content">
          <h1>Tab Content 1</h1>
          <p>{props.showListData}</p>
        </div>
      </section>
    );
  }
  return null;
};
const Rendertabcontent2 = props => {
  const checkTabConten2Status = props.showTabContent2;
  if (checkTabConten2Status) {
    return (
      <section className="tab-content-wrapper">
        <div className="tab-content">
          <h1>Tab Content 2</h1>
          <p>{props.showListData}</p>
        </div>
      </section>
    );
  }
  return null;
};
const Rendertabcontent3 = props => {
  const checkTabConten3Status = props.showTabContent3;
  if (checkTabConten3Status) {
    return (
      <section className="tab-content-wrapper">
        <div className="tab-content">
          <h1>Tab Content 3</h1>
          <p>{props.showListData}</p>
        </div>
      </section>
    );
  }
  return null;
};

const Renderfinaltabcomponent = props => {
  return (
    <>
      <Rendertabs
        handleHomeTab={props.handleHomeTab}
        handleAboutTab={props.handleAboutTab}
        handleContactTab={props.handleContactTab}
        focusHomeBackground={props.focusHomeBackground}
        focusAboutBackground={props.focusAboutBackground}
        focusContactBackground={props.focusContactBackground}
      />
      <Rendertabcontent1
        showTabContent1={props.showTabContent1}
        showListData={props.showListData}
      />
      <Rendertabcontent2
        showTabContent2={props.showTabContent2}
        showListData={props.showListData}
      />
      <Rendertabcontent3
        showTabContent3={props.showTabContent3}
        showListData={props.showListData}
      />
    </>
  );
};

export default Renderfinaltabcomponent;
