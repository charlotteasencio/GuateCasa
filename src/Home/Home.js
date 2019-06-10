import React from "react";
import "./Home.scss";
//import Search from "../Search";
import HomePageCard from "../HomePageCard";
import Footer from "../Footer";
import Search from "../Search";

export default class Home extends React.Component {
  render() {
    return (
      <div id="mainHomePage">
        <div id="headerHomePage">
          <h3>¿En donde quieres vivir?</h3>
          {/*<Search />*/}
          <Search />
        </div>
        <div className="aboutSection">
          <HomePageCard title="Rent" buttonExample="Rent" />
          <HomePageCard title="Buy" buttonExample="Buy" />
          <HomePageCard title="Sell" buttonExample="Sell" />
        </div>
        <Footer />
      </div>
    );
  }
}
