import React, { lazy } from "react";
import "../css/simulador.css";
import { getTaxaSelic } from "../services/data";

const LciLcaComponent = lazy(() => import("../../../Components/LciLcaComponent"))

export default async function LciLca() {
  const taxaCdi = await getTaxaSelic();

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de LCI e LCA
        </h2>
        <br />
        <LciLcaComponent taxaCdi={taxaCdi}/>
      </div>
    </section >
  );
}