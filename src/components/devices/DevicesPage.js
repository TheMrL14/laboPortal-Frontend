import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadDevices } from "../../redux/actions/deviceActions";

import DeviceTile from "./DeviceTile";
import SideNavDevices from "./SideNavDevices";
import "../../style/devices.css";

function DevicesPage({ devices, loadDevices }) {
  useEffect(() => {
    if (devices.length === 0) {
      loadDevices().catch((error) => {
        alert("Loading devices failed" + error);
      });
    }
  }, []);

  return (
    <>
      <SideNavDevices />
      <section className="mainContent">
        <section className="p-grid">
          {devices.map((device) => (
            <DeviceTile key={device.name} device={device} />
          ))}
        </section>
      </section>
    </>
  );
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });
const mapDispatchToProps = {
  loadDevices,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
