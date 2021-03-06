import React from "react";

const SopRow = (props) => {
  return (
    <>
      <li className="table-row">
        <div className="col col-1" data-label="Title">
          {props.sop.title}
        </div>
        <div className="col col-2" data-label="Authors">
          {props.sop.authors}
        </div>
        <div className="col col-3" data-label="creationDate">
          {props.sop.creationDate}
        </div>
      </li>
    </>
  );
};

export default SopRow;
