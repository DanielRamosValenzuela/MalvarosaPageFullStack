import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/image/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="header-1">
        <Link to="/" className="logo">
          <img src={logo} alt="Malvarosa Verde" height="50px"></img>
        </Link>

        <div className="form-container">
          <form action="">
            <input type="search" placeholder="Búsqueda..." id="search" />
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} />
            </label>
          </form>
        </div>
      </div>

      <div className="header-2">
        <div id="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="active">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/">Plantas</Link>
            </li>
            <li>
              <Link to="/">Huerto</Link>
            </li>
            <li>
              <Link to="/">Equipamiento</Link>
            </li>
            <li>
              <Link to="/">Insumos</Link>
            </li>
            <li>
              <Link to="/">Decoración</Link>
            </li>
            <li>
              <Link to="/">Maceteros</Link>
            </li>
            <li>
              <Link to="/">Libros</Link>
            </li>
            <li>
              <Link to="/">Florería</Link>
            </li>
            <li>
              <Link to="/">Talleres</Link>
            </li>
            <li>
              <Link to="/">Regalos</Link>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <Link to="/" className="fas fa-heart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </>
  );
};
