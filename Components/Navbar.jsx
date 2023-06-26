import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
            <Link className="nav-link" aria-current="page" href={"/"}>
              Inicio
            </Link>
            <Link className="nav-link" href={"/JurosCompostos"}>Juros Compostos</Link>
            <Link className="nav-link" href={"/JurosSimples"}>Juros Simples</Link>
            <Link className="nav-link" href={"/Financiamento"}>Financiamento</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
