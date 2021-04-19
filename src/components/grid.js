import React from "react";
import { gridData } from "./data.js";

const Rendergrid = () => {
  return (
    <section className="grid-wrapper">
      {gridData.map(gridValues => {
        return (
          <div key={gridValues.id} className="parent-wrapper">
            <div className="content-wrapper">
              {/* <img src={gridValues.gridImage} alt="Image" /> */}
              <h1>{gridValues.heading}</h1>
              <p>{gridValues.paragraph}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Rendergrid;
