import React from "react";
import LciLcaComponent from "../../../Components/LciLcaComponent";
import { getTaxaSelic } from "../services/data";

export default async function LciLca() {
  const taxaCdi = await getTaxaSelic();

  return <LciLcaComponent taxaCdi={taxaCdi} />
}