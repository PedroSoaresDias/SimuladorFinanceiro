import React, { lazy } from "react";
import "../css/simulador.css";

const JurosCompostosComponent = lazy(() => import("../../../Components/JurosCompostosComponent"));

const JurosCompostos: React.FC = () => {
  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de Juros Compostos
        </h2>
        <br />
        <JurosCompostosComponent />
      </div>
    </section >
  );
}

export default JurosCompostos;