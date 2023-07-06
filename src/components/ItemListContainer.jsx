import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import herramientas from "../herramientas.json";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(herramientas);
      });
    });
    promesa.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <ItemList items={items}/>
          <ItemCount stock={10} />
        </div>
      </div>
    </div>
  );
};
export default ItemListContainer;
