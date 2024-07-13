import CdbComponent from "../../../Components/CdbComponent";
import { getTaxaSelic } from "../services/data";

export default async function Cdb() {
  const taxaCdi = await getTaxaSelic();

  return <CdbComponent taxaCdi={taxaCdi} />
}