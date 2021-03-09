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
  id: null,
  title: "",
  description: "",
  creationDate: "",
  procedure: [newStep],
};

module.exports = {
  newDevice,
  newSop,
  newStep,
};
