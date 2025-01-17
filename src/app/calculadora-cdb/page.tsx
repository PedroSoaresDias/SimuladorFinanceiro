import React, { lazy } from "react";
import { getTaxaSelic } from "../services/data";
import "../css/simulador.css";

const CdbComponent = lazy(() => import("../../../Components/CdbComponent"))

export default async function Cdb() {
  const taxaCdi = await getTaxaSelic();

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de CDB
        </h2>
        <br />
        <CdbComponent taxaCdi={taxaCdi} />
      </div>
    </section >
  )
}