const newDevice = {
  id: null,
  name: "",
  description: "",
};

const newStep = {
  stepNr: 1,
  message: "",
};
const newSop = {
  id: 0,
  title: "New Sop",
  description: "",
  creationDate: "",
  procedure: [newStep],
};

module.exports = {
  newDevice,
  newSop,
  newStep,
};
