import React from 'react';
import { getTaxaSelic } from '../services/data';
import PoupancaComponent from '../../../Components/PoupancaComponent';

export default async function page() {
  const taxaCdi = await getTaxaSelic();

  return <PoupancaComponent taxaCdi={taxaCdi} />
}