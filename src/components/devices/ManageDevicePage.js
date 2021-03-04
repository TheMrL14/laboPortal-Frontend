import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDevices, saveDevice } from "../../redux/actions/deviceActions";
import PropTypes from "prop-types";
import "../../style/devices.css";
import SideNavDevice from "./SideNavDevice";
import DeviceForm from "./DeviceForm";
import { newDevice } from "../../tools/Models";

function ManageDevicePage({
  devices,
  loadDevices,
  saveDevice,
  history,
  ...props
}) {
  const [device, setDevice] = useState({ ...props.device });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (devices.length === 0) {
      loadDevices().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }, []);

  function handleChange(ev) {
    const { name, value } = ev.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: name === "sopId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveDevice(device).then(() => {
      history.push("/devices");
    });
  }

  return (
    <>
      <SideNavDevice />
      <DeviceForm
        device={device}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

ManageDevicePage.propTypes = {
  device: PropTypes.object.isRequired,
  devices: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
  saveDevice: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  //loadSop: PropTypes.function.isRequired,
};

export function getDeviceBySlug(devices, slug) {
  return devices.find((device) => device.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const device =
    slug && state.courses.length > 0
      ? getDeviceBySlug(state.devices, slug)
      : newDevice;
  return {
    device,
    devices: state.devices,
  };
}

const mapDispatchToProps = {
  loadDevices,
  saveDevice,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDevicePage);
