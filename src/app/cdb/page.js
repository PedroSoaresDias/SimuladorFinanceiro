import CdbComponent from "../../../Components/CdbComponent";
import { getTaxaSelic } from "../services/data";

export default async function Cdb() {
  const taxaCdi = await getTaxaSelic();

  return taxaCdi.data == new Date().toLocaleDateString() ? <CdbComponent taxaCdi={taxaCdi} /> : <CdbComponent taxaCdi={taxaCdi} />
}