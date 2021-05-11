import React from "react";
import "./Alquiler.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";

const housesAlquiler = [
  {
    id: 1,
    address: "primera avenida norte, antigua, guatemala",
    price: "$100,000",
    beds: 2,
    baths: 2,
    info:
      "Un apartamento pequeño pero bonito cerca del parque central de Antigua."
  },
  {
    id: 2,
    address: "primera avenida norte, guatemala, guatemala",
    price: "$200,000",
    beds: 4,
    baths: 2,
    info:
      "Una casa grande que se puede utilizar como oficina, negocio, o vivienda."
  },
  {
    id: 3,
    address: "panajachel, guatemala",
    price: "$150,000",
    beds: 3,
    baths: 3,
    info:
      "Una casa bonita a la orila del Lago de Atitlan para vivir de vacaciones."
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
    address: "san pedro la laguna, guatemala",
    price: "$110,000",
    beds: 2,
    baths: 1,
    info:
      "Casa pequeña para salir de vacaciones y relajarse cada fin de semana."
  }
];

const Alquiler = () => {
  return (
    <div className="alquiler">
      <MyMapComponent isMarkerShown houses={housesAlquiler} />
      <Sidebar title="Casas en Alquiler" houses={housesAlquiler} />
    </div>
  );
};

export default Alquiler;
