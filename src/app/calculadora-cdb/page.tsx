import React from "react";
import CdbComponent from "../../../Components/CdbComponent";
import { getTaxaSelic } from "../services/data";
import "../css/simulador.css";

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