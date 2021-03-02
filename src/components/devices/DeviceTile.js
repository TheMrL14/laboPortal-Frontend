import React from "react";

const DeviceTile = (props) => (
  <a href="" className="card">
    <div className="thumb"></div>
    <article>
      <h1>{props.device.name}</h1>
      <span>Author</span>
    </article>
  </a>
);

export default DeviceTile;
