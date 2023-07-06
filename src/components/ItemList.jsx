import React from "react";
import Item from "./Item";

export function ItemList({ items }) {
  return (
    <div className="row">
        {
            items.map(item =>
                <div className="col-md-4" key={item.id}>
                    <Item item={item} />
                </div>
            )
        }
    </div>
  );
}
