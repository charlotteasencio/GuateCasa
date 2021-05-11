import React from "react";
import "./Comprar.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";

const housesComprar = [
  {
    id: 1,
    address: "septima avenida, antigua, guatemala",
    price: "$100,000",
    beds: 3,
    baths: 2,
    info:
      "Apartamento en la septima avenida. Se puede caminar a todos los lugares de Antigua."
  },
  {
    id: 2,
    address: "huehuetenango, guatemala",
    price: "$100,000",
    beds: 4,
    baths: 2,
    info:
      "Casa grande a tres cuadras del centro. Se puede utilizar como oficina o vivienda."
  },
  {
    id: 3,
    address: "chichicastenango, guatemala",
    price: "$75,000",
    beds: 3,
    baths: 3,
    info: "Casa en venta en Chichicastenango, cerca del mercado."
  },
  {
    id: 4,
    address: "san lucas, guatemala",
    price: "$175,000",
    beds: 4,
    baths: 3,
    info: "Casa familiar en San Lucas. Muy accesible a La Capital y Antigua."
  },
  {
    id: 5,
    address: "san juan la laguna, guatemala",
    price: "$140,000",
    beds: 3,
    baths: 2,
    info: "Casa familiar en San Juan La Laguna a tres cuadras del lago."
  }
];

const Comprar = () => {
  return (
    <div className="comprar">
      <MyMapComponent isMarkerShown houses={housesComprar} />
      <Sidebar houses={housesComprar} title="Casas en Venta" />
    </div>
  );
};

export default Comprar;
