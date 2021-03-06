import React from "react";
import SideNavSops from "./SideNavSops";
import SopRow from "./SopRow";
import "../../style/sops.css";

//https://codepen.io/faaezahmd/pen/dJeRex
function SopsPage(...props) {
  const sop = {
    title: "test",
    authors: "John Doe, Thomas Smith",
    creationDate: "27-02-2021",
  };

  return (
    <>
      <SideNavSops />
      <section className="mainContent">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Title</div>
            <div className="col col-2">Authors</div>
            <div className="col col-3">creation date</div>
          </li>
          <SopRow sop={sop} />
        </ul>
      </section>
    </>
  );
}
/*
SopsPage.propTypes = {
  //devices: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ devices: state.devices });

//TODO : SIMPLIFY
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(devicesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SopsPage);
*/
export default SopsPage;
