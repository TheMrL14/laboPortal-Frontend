import React from "react";
import PropTypes from "prop-types";

const DeviceTile = (props) => {
  return (
    <article className="p-col-6 p-md-6 p-lg-4 p-xl-3 p-xxl">
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
    </article>
  );
};
DeviceTile.propTypes = {
  device: PropTypes.object.isRequired,
};

export default DeviceTile;

/*

*/
