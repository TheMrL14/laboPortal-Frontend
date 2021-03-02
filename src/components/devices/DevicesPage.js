import React from "react";
import { connect } from "react-redux";
import * as devicesActions from "../../redux/actions/deviceActions";
import PropTypes from "prop-types";
import "../../style/devices.css";
import DeviceTile from "./DeviceTile";
import { bindActionCreators } from "redux";

class DevicesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadDevices().catch((err) => {
      alert("loading courses failed" + err);
    });
  }

  render() {
    return (
      <main>
        <div className="centered">
          <section className="cards">
            {this.props.devices.map((device) => (
              <DeviceTile key={device.name} device={device} />
            ))}
          </section>
        </div>
      </main>
    );
  }
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(devicesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
