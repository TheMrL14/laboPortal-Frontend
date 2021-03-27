import React from "react";

import "../../style/sop.css";

const SOPDetail = (props) => (
  <section className="procedure">
    <h2>{props.sop.title}</h2>
    <p>{props.sop.creationDate}</p>
    <p>{props.sop.description}</p>
    <ul>
      {props.sop.procedure.map((step, i) => (
        <li key={i}>
          <span className="number">{step.stepNr}</span>
          <span className="step">{step.message}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default SOPDetail;
