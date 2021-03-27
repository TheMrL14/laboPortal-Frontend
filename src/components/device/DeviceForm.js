import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import TextAreaInput from "../common/TextAreaInput";
import { Dropdown } from "primereact/dropdown";
import FileInput from "../common/FileInput";

const DeviceForm = ({
  device,
  sop,
  sops,
  onSave,
  onChange,
  isNewSop,
  setSelectedSop,
  saving = false,
  errors = {},
}) => {
  const setImage = (e) => {
    let reader = new FileReader();
    let file = e.files[0];
    var fileByteArray = [];
    console.log("Saving: " + file.name);
    reader.readAsArrayBuffer(file);
    reader.onload = (evt) => {
      if (evt.target.readyState == FileReader.DONE) {
        var arrayBuffer = evt.target.result,
          array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < array.length; i++) {
          fileByteArray.push(array[i]);
        }
      }
      console.log(fileByteArray);
      device.imageName = file.name;
      device.image = fileByteArray;
    };
  };

  return (
    <form onSubmit={onSave}>
      <h2>{device.id ? "Edit" : "Add"} Device</h2>
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
      <TextAreaInput
        name="description"
        label="description"
        value={device.description}
        onChange={onChange}
        error={errors.description}
      />
      <FileInput
        name="image"
        label="Image"
        value={device.imageName}
        setImage={setImage}
        error={errors.description}
      />
      <Dropdown
        optionLabel="title"
        filter
        filterBy="title"
        placeholder="Select a SOP"
        dataKey="id"
        value={sop}
        options={sops}
        onChange={(e) => setSelectedSop(e.value)}
      />

      <br />
      {isNewSop ? null : (
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      )}
    </form>
  );
};

DeviceForm.propTypes = {
  activeIndex: PropTypes.number,
  isNewSop: PropTypes.bool,
  device: PropTypes.object.isRequired,
  sop: PropTypes.object,
  sops: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setSelectedSop: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default DeviceForm;
