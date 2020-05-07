import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectColletion } from "../../redux/shop/shop.selector";

import "./collection.style.scss";

export const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownPorps) => ({
  collection: selectColletion(ownPorps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
