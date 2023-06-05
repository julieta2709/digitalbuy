import React from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className="container-fluid barra">
      <div className="row">
        <div className="col-md-10">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand me-auto" to={"/"}>
                <img
                  className="logo"
                  src={"img/Logo DB.jpeg"}
                  alt="logo"
                  width={40}
                />
                Digital Buy
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
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/Productos"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Productos
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item">Jardinería</NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item">Carpintería</NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item">
                          Construcción
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item">Plomería</NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item">
                          Electricidad
                        </NavLink>
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
                  <li>
                    <Link className="nav-link" to={"/"}>
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/"}>
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/"}>
                      Inicio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-2 d-flex justify-content-around align-items-center">
          
        </div>
      </div>
    </div>
  );
}
