import React from "react";
import PropTypes from "prop-types";

const SopRow = (props) => {
  const authors = props.sop.authors
    .map((author) => {
      return author.firstName + " " + author.lastName;
    })
    .join(",");

  console.log(authors);
  return (
    <>
      <li className="table-row">
        <div className="col col-1" data-label="Title">
          {props.sop.title}
        </div>
        <div className="col col-2" data-label="Authors">
          {authors}
        </div>
        <div className="col col-3" data-label="creationDate">
          {props.sop.creationDate}
        </div>
      </li>
    </>
  );
};

SopRow.propTypes = {
  sop: PropTypes.object.isRequired,
};

export default SopRow;
