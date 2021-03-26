import React from "react";
const Rendercontent = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <ul className="listItems">
        {props.loadResult && <p className="loading-text">loading...</p>}
        {props.getMonths.map(getMonthResult => {
          return (
            <li
              onClick={() =>
                props.fetchResult(getMonthResult.company.catchPhrase)
              }
              key={getMonthResult.name}
            >
              {getMonthResult.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Renderfinalcontent = props => {
  return (
    <>
      <Rendercontent
        title="API Result"
        getMonths={props.getMonths}
        fetchResult={props.fetchResult}
        loadResult={props.loadResult}
      />
    </>
  );
};
export default Renderfinalcontent;
