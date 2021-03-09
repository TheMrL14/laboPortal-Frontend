import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDevices, saveDevice } from "../../redux/actions/deviceActions";
import PropTypes from "prop-types";
import SideNavDevices from "../devices/SideNavDevices";
import DeviceForm from "../device/DeviceForm";
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
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (devices.length === 0) {
      loadDevices().catch((error) => {
        alert("Loading devices failed" + error);
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

  function formIsValid() {
    const { title, description } = device;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!description) errors.author = "Author is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveDevice(device)
      .then(() => {
        history.push("/devices");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
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
        saving={saving}
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
