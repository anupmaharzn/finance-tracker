import React from "react";
import * as routeLink from "../../routes";
import { Link } from "react-router-dom";
import "./home.scss";
import background from "../../assets/img/landing.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src={background} alt="landingimg"></img>
        <div className="title">
          <Link to={routeLink.LOGIN_PAGE}>
            <button className="title__button">GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
