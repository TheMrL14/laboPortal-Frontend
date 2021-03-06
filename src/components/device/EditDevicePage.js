import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDevices, saveDevice } from "../../redux/actions/deviceActions";
import PropTypes from "prop-types";
import SideNavDevices from "../devices/SideNavDevices";
import DeviceForm from "../devices/DeviceForm";
import { newDevice } from "../../tools/Models";

import "../../style/devices.css";
import SideNavDevice from "./SideNavDevice";
export function EditDevicePage({
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
    } else {
      setDevice({ ...props.device });
    }
  }, [props.device]);

  function handleChange(event) {
    const { name, value } = event.target;
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

  return devices.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <>
      {device.id ? <SideNavDevice /> : <SideNavDevices />}
      <DeviceForm
        device={device}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

EditDevicePage.propTypes = {
  device: PropTypes.object.isRequired,
  devices: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
  saveDevice: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  //loadSop: PropTypes.function.isRequired,
};

export function getDeviceBySlug(devices, slug) {
  return devices.find((device) => device.id === parseInt(slug)) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  console.log(slug && state.devices.length > 0);
  const device =
    slug && state.devices.length > 0
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

export default connect(mapStateToProps, mapDispatchToProps)(EditDevicePage);
