import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg bg-body-tertiary text-start">
      <div className="container-fluid">
        <div className="logo">
          <h4>FinSimulator</h4>
        </div>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link" aria-current="page" href={"/"}>
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown link">
              <Link
                className="nav-link link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Renda Fixa
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item link" href={"/cdb"}>
                    CDB
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown link">
              <Link
                className="nav-link link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calculadora de Juros
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item link" href={"/JurosCompostos"}>
                    Juros Compostos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item link" href={"/JurosSimples"}>
                    Juros Simples
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" href={"/Financiamento"}>
                Financiamento SAC
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
