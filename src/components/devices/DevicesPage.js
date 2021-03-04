import React from "react";
import { connect } from "react-redux";
import * as devicesActions from "../../redux/actions/deviceActions";
import PropTypes from "prop-types";
import "../../style/devices.css";
import DeviceTile from "./DeviceTile";
import { bindActionCreators } from "redux";

import SideNavDevice from "./SideNavDevice";

class DevicesPage extends React.Component {
  componentDidMount() {
    const { devices, actions } = this.props;

    if (devices.length === 0) {
      actions.loadDevices().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <SideNavDevice />
        <section className="mainContent">
          <div className="centered">
            <section className="cards">
              {this.props.devices.map((device) => (
                <DeviceTile key={device.name} device={device} />
              ))}
            </section>
          </div>
        </section>
      </>
    );
  }
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });
//TODO : SIMPLIFY
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(devicesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
