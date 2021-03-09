import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import TextAreaInput from "../common/TextAreaInput";

import "../../style/form.css";

const SopForm = ({
  sop,
  onSave,
  onChange,
  onStepChange,
  onStepAdd,
  onStepRemove,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{sop.id ? "Edit" : "Add"} Sop (Standard Operating Procedures)</h2>

      <TextInput
        name="title"
        label="Title"
        value={sop.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextAreaInput
        name="description"
        label="Description"
        value={sop.description}
        onChange={onChange}
        error={errors.description}
      />
      <label>Procedure</label>
      <div className="box">
        {sop.procedure.map((step, i) => (
          <div key={i}>
            <input
              onChange={(e) => onStepChange(e, i)}
              name="message"
              value={step.message}
            />
            {sop.procedure.length !== 1 && (
              <button onClick={(e) => onStepRemove(e, i)} className="remove">
                -
              </button>
            )}
            {sop.procedure.length - 1 === i && (
              <button onClick={onStepAdd} className="add">
                +
              </button>
            )}
            <br />
          </div>
        ))}
      </div>

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

SopForm.propTypes = {
  sop: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
  onStepAdd: PropTypes.func.isRequired,
  onStepRemove: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default SopForm;
