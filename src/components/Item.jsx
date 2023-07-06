import React from "react";

const Item = ({item}) => {
    return (
        <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{item.nombre}</h5>
                            <p className="card-text text-justify">{item.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Item