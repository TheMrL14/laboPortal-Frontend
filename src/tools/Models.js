const newDevice = {
  id: null,
  name: "",
  description: "",
};

const newStep = {
  stepNr: 1,
  message: "",
};

const newAbbreviation = {
  abbreviation: "",
  description: "",
};
const newSop = {
  id: 0,
  title: "New Sop",
  description: "",
  creationDate: "",
  procedure: [newStep],
  abbreviations: [newAbbreviation],
};

module.exports = {
  newDevice,
  newSop,
  newStep,
};
