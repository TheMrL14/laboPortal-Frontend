import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadSops, saveSop } from "../../redux/actions/sopActions";
import PropTypes from "prop-types";
import SideNavSops from "../sops/SideNavSops";
import SopForm from "../sop/SopForm";
import { newSop } from "../../tools/Models";

import "../../style/sops.css";
import SideNavSop from "./SideNavSop";

export function EditSopPage({
  sops,
  loadSops,
  saveSop,
  history,
  closeWindow,
  ...props
}) {
  const [sop, setSop] = useState({ ...props.sop });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (sops.length === 0) {
      loadSops().catch((error) => {
        alert("Loading sops failed" + error);
      });
    } else {
      setSop({ ...props.sop });
    }
  }, [props.sop]);

  function handleChange(event) {
    const { name, value } = event.target;
    setSop((prevSop) => ({
      ...prevSop,
      [name]: name === "sopId" ? parseInt(value, 10) : value,
    }));
  }

  const handleStepChange = (e, index) => {
    const { value } = e.target;
    const list = [...sop.procedure];
    list[index]["message"] = value;
    list[index]["stepNr"] = index + 1;
    setSop((prevSop) => ({
      ...prevSop,
      ["procedure"]: list,
    }));
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...sop.procedure];
    console.log(index);
    list.splice(index, 1);
    setSop((prevSop) => ({
      ...prevSop,
      ["procedure"]: list,
    }));
  };
  const handleAddClick = () => {
    setSop((prevSop) => ({
      ...prevSop,
      ["procedure"]: [
        ...prevSop.procedure,
        { stepNr: sop.procedure.length + 1, message: "" },
      ],
    }));
  };

  const handleAbbreviationChange = (e, index) => {
    const { value } = e.target;
    const list = [...sop.abbreviations];
    list[index][e.target.name] = value;
    setSop((prevSop) => ({
      ...prevSop,
      ["abbreviations"]: list,
    }));
    console.log(sop);
  };

  // handle click event of the Remove button
  const handleAbbreviationRemove = (index) => {
    const list = [...sop.abbreviations];
    list.splice(index, 1);
    setSop((prevSop) => ({
      ...prevSop,
      ["abbreviations"]: list,
    }));
  };
  const handleAbbreviationAdd = () => {
    setSop((prevSop) => ({
      ...prevSop,
      ["abbreviations"]: [
        ...prevSop.abbreviations,
        { abbreviation: "", description: "" },
      ],
    }));
  };

  function formIsValid() {
    const { title, description } = sop;
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
    console.log(sop);
    if (props.isForm) saveSop(sop);
    else {
      setSaving(true);
      saveSop(sop)
        .then(() => {
          history.push("/sops");
        })
        .catch((error) => {
          setSaving(false);
          setErrors({ onSave: error.message });
        });
    }
  }

  return (
    <>
      {!props.isForm ? sop.id ? <SideNavSop /> : <SideNavSops /> : null}
      <section className="mainContent">
        <SopForm
          sop={sop}
          errors={errors}
          onChange={handleChange}
          onStepChange={handleStepChange}
          onStepAdd={handleAddClick}
          onStepRemove={handleRemoveClick}
          onAbbreviationChange={handleAbbreviationChange}
          onAbbreviationAdd={handleAbbreviationAdd}
          onAbbreviationRemove={handleAbbreviationRemove}
          onSave={handleSave}
          saving={saving}
          closeWindow={closeWindow}
        />
      </section>
    </>
  );
}

EditSopPage.propTypes = {
  isForm: PropTypes.bool,
  sop: PropTypes.object.isRequired,
  sops: PropTypes.array.isRequired,
  loadSops: PropTypes.func.isRequired,
  saveSop: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getSopBySlug(sops, slug) {
  return sops.find((sop) => sop.id === parseInt(slug)) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const sop =
    slug && state.sops.length > 0 ? getSopBySlug(state.sops, slug) : newSop;
  return {
    sop,
    sops: state.sops,
  };
}

const mapDispatchToProps = {
  loadSops,
  saveSop,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSopPage);
