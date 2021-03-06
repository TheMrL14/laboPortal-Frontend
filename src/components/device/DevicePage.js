import React, { useEffect, useState } from "react";

import SideNavDevice from "./SideNavDevice";

function DevicePage(...props) {
  return (
    <>
      <SideNavDevice id={1} />
      <section className="mainContent"></section>
    </>
  );
}
/*
DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });
//TODO : SIMPLIFY
const mapDispatchToProps = {
  loadDevices,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
*/

export default DevicePage;
