import React from "react";
import PropTypes from "prop-types";

import { Tag } from "primereact/tag";
import "../../style/sop.css";

const SOPDetail = (props) => {
  console.log(props);
  return (
    <section className="procedure mainContent">
      <h2>{props.sop.title}</h2>
      {props.sop.abbreviations.map((tag, i) => (
        <abbr className="p-mr-2" key={i} title={tag.description}>
          <Tag value={tag.abbreviationShort} />
        </abbr>
      ))}

      <p>{props.sop.description}</p>
      <ul>
        {props.sop.procedure.map((step, i) => (
          <li key={i}>
            {step.image ? (
              <img
                className="imgStep"
                src={`data:image/jpeg;base64,${step.image}`}
              ></img>
            ) : null}
            <span className="step">{step.message}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SOPDetail;

SOPDetail.propTypes = {
  sop: PropTypes.object.isRequired,
};
