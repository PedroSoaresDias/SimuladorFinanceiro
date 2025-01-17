import React, { lazy } from "react";
import "../css/simulador.css";

const JurosSimplesComponent = lazy(() => import("../../../Components/JurosSimplesComponent"));

const JurosSimples: React.FC = () => {
  return (
    <section className="simulador">
      <div className="container text-dark">
        <h2 className="text-center">Calculadora de Juros Simples</h2>
        <br />
        <JurosSimplesComponent />
      </div>
    </section>
  );
}

export default JurosSimples;