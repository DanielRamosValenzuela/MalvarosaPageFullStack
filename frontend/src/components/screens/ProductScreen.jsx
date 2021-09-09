import React from "react";
import { productsData } from "../../data";

export const ProductScreen = (props) => {
  console.log("data: ", productsData, props.match.params.SKU);
  const product = productsData.find(
    (x) => x.SKU === parseInt(props.match.params.SKU)
  );
  //   console.log(product);
  if (!product) {
    <div>Producto no encontrado</div>;
  }
  return (
    <section>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Precio: ${product.price}</li>
            <li>
              Descripción: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Precio</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Estado</div>
                  <div>
                    {product.stock > 0 ? (
                      <span className="success">Disponible</span>
                    ) : (
                      <span className="error">No disponible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Añadir al carro</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
