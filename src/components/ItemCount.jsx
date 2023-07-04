import React, { useState, useEffect } from "react";

const ItemCount = ({ stock }) => {
  const [clicks, setClicks] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

  const agregarProducto = () => {
    if (clicks < stock) {
      setClicks(clicks + 1);
    }
  };

  const sacarProducto = () => {
    setClicks(clicks - 1);
  };
  const addToCart = (quantity) => {
    setItemStock(itemStock - quantity);
    setClicks(1);
    console.log("Agregaste: " + clicks + " Productos al carrito");
  };
  useEffect(() => {
    setItemStock(stock);
  }, [stock]);
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-2">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-dark"
              disabled={clicks <= 1}
              onClick={sacarProducto}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-dark" disabled>
              {clicks}
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              disabled={clicks >= itemStock}
              onClick={agregarProducto}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-dark"
            disabled={stock <= 0}
            onClick={() => {
              addToCart(clicks);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
