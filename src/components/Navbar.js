import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import fondo from "../components/images/fon1.jpg";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header"></div>
      <div className="fond-nav">
        <img clasName="fondo" src={fondo} alt={fondo} />
        <nav className="navbar">
          <div className="nav-container">
            <p className="tex1">
              CONSULTA
              <br /> CON EXITO
            </p>

            <ul className={click ? "nav-menu active" : "nav-menu "}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  INICIO
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/Nosotros"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  QUIENES SOMOS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Candidatos"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  CANDIDATOS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/Contactenos"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  CONTACTENOS
                </NavLink>
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
