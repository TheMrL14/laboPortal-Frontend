import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDevices } from "../../redux/actions/deviceActions";

import PropTypes from "prop-types";
import "../../style/devices.css";
import DeviceTile from "./DeviceTile";
import { bindActionCreators } from "redux";

import SideNavDevices from "./SideNavDevices";

function DevicesPage({ devices, loadDevices, ...props }) {
  useEffect(() => {
    if (devices.length === 0) {
      loadDevices().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }, []);

  return (
    <>
      <SideNavDevices />
      <section className="mainContent">
        <div className="centered">
          <section className="cards">
            {devices.map((device) => (
              <DeviceTile key={device.name} device={device} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });
//TODO : SIMPLIFY
const mapDispatchToProps = {
  loadDevices,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
