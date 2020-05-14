import React from "react";

import "./directory.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionParams }) => (
        <MenuItem key={id} {...sectionParams} />
      ))}
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToPros)(Directory);
