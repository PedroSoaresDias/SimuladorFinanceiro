import CdbComponent from "../../../Components/CdbComponent";
import { getTaxaSelic } from "../services/data";

export default async function Cdb() {
  const taxaCdi = await getTaxaSelic();
  const taxa = taxaCdi ? parseFloat(taxaCdi?.valor) : 0;

  return (
    <CdbComponent taxaCdi={taxa} />
  );
}