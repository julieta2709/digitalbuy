import React from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/img/LogoDB.jpeg"
              alt="Logo"
              width={40}
              className="d-inline-block align-text-top"
            />
            DigitalBuy
          </Link>
          <div>
          <form className="d-flex" role="search">
            <label>
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
            </label>
            <input className="form-control me-2" type="search" placeholder="¿Qué estás buscando?" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
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
        <div className="container-fluid">
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/Productos"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item">Jardinería</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Carpintería</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Construcción</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Plomería</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Electricidad</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Hogar</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Seguridad</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item">Taller</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
