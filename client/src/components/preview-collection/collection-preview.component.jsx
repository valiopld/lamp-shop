import React from "react";
import { Link } from "react-router-dom";
import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1>
        <Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
