import React from "react";

import "./collections-overview.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPrewview } from "../../redux/shop/shop.selector";

import { CollectionPreview } from "../preview-collection/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPrewview,
});
export default connect(mapStateToProps)(CollectionsOverview);
