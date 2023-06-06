import React from "react";
import "../Styles/NavBar2.css";
import { Link, NavLink } from "react-router-dom";

export function NavBar2() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/img/DB-grey.png"
              alt="Logo"
              width={40}
              className="d-inline-block align-text-top"
            />
            <img src="/img/DigitalBuy-grey.png" alt="logo" width={200} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Categorias"
                >
                  Categorías
                </a>
              </li>
              <li>
                <NavLink className="nav-item">Jardinería</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Carpintería</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Construcción</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Plomería</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Electricidad</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Hogar</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Seguridad</NavLink>
              </li>
              <li>
                <NavLink className="nav-item">Taller</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="¿Qué estás buscando?"
                aria-label="Search"
              />
              <button className="btn btn-secondary" type="submit">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
          <div className="col-md-2 d-flex justify-content-around align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}
