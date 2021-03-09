import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadSops } from "../../redux/actions/sopActions";

import SideNavSops from "./SideNavSops";
import SopRow from "./SopRow";
import "../../style/sops.css";

/*
 *css and html structuire from
 *https://codepen.io/faaezahmd/pen/dJeRex
 *
 */

function SopsPage({ sops, loadSops }) {
  useEffect(() => {
    if (sops.length === 0) {
      loadSops().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }, []);

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
          {sops.map((sop) => (
            <SopRow key={sop.id} sop={sop} />
          ))}
        </ul>
      </section>
    </>
  );
}

SopsPage.propTypes = {
  sops: PropTypes.array.isRequired,
  loadSops: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ sops: state.sops });

const mapDispatchToProps = {
  loadSops,
};

export default connect(mapStateToProps, mapDispatchToProps)(SopsPage);
