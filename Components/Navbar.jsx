import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="logo">
          <h4>Simualdor financeiro</h4>
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
          <div className="navbar-nav">
            <Link className="nav-link link" aria-current="page" href={"/"}>
              Inicio
            </Link>
            <li className="nav-item dropdown">
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
            <Link className="nav-link link" href={"/Financiamento"}>
              Financiamento
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
