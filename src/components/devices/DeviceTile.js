import React from "react";
import PropTypes from "prop-types";

const DeviceTile = (props) => (
  <a href={"./devices/" + props.device.id + "/info"} className="card">
    <div
      className="thumb"
      style={{
        backgroundImage: `url(data:image/jpeg;base64,${props.device.image})`,
      }}
    ></div>
    <article>
      <h1>{props.device.name}</h1>
    </article>
  </a>
);

DeviceTile.propTypes = {
  device: PropTypes.object.isRequired,
};

export default DeviceTile;
