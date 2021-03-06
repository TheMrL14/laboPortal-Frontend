import React from "react";
import PropTypes from "prop-types";

const DeviceTile = (props) => (
  <a href={"./device/" + props.device.id + "/info"} className="card">
    <div className="thumb"></div>
    <article>
      <h1>{props.device.name}</h1>
    </article>
  </a>
);

DeviceTile.propTypes = {
  device: PropTypes.object.isRequired,
};

export default DeviceTile;
