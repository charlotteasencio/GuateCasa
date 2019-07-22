import React from "react";
import "./Home.scss";
import HomePageCard from "../HomePageCard";
import Footer from "../Footer";
import Search from "../Search";
import homeIconLeft from "../assets/images/tealHomeIcon3.png";
import homeIconCenter from "../assets/images/tealHomeIcon4.png";
import homeIconRight from "../assets/images/tealHomeIcon5.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__header">
          <h1>¿En donde quieres vivir?</h1>
          <Search />
        </div>
        <div className="homepage__about">
          <HomePageCard
            title="Compra"
            buttonExample="Compra"
            color="rgb(255, 165, 81)"
            homeIcon={homeIconLeft}
            goto="comprar"
            info="Nostors queremos que encuentras a tu hogar perfecto y aqui la puedes buscar. ¡Bienvenido a Casa!"
          />
          <HomePageCard
            title="Alquila"
            buttonExample="Alquila"
            color="rgb(255, 165, 81)"
            homeIcon={homeIconCenter}
            goto="alquiler"
            info="Si necesitas alquiler una casa de cuatro recamaras o un apartamento estudio, aqui lo puedes encontrar."
          />
          <HomePageCard
            title="Venda"
            buttonExample="Venda"
            color="rgb(255, 165, 81)"
            homeIcon={homeIconRight}
            goto="vender"
            info="¿Es hora de mudarse a un hogar nuevo? Puedes postear tu casa en venta aqui."
          />
        </div>
        <Footer />
      </div>
    );
  }
}
