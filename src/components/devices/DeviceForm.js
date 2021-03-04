import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const DeviceForm = ({
  device,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{device.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="name"
        value={device.name}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="description"
        label="description"
        value={device.description}
        onChange={onChange}
        error={errors.description}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default DeviceForm;
