import React from "react";
import ActsOfLove from "../ActsOfLove/ActsOfLove";
import GoodWill from "../GoodWill/GoodWill";
import LeaderShip from "../LeaderShip/LeaderShip";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">TASK CATEGORIES</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <ActsOfLove />
        </div>

        <div className="col-1-of-3">
          <GoodWill />
        </div>

        <div className="col-1-of-3">
          <LeaderShip />
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="/" className="btn btn--green">
          Adventure Awaits
        </Link>
      </div>
    </section>
  );
};

export default Categories;
