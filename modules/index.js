import Etudiant, { Etablissement as Etab, info } from './etudiant.js';

const etd1 = new Etudiant('Rami', 33);
console.log(`${info(etd1)} Etablissement: ${Etab}`);
