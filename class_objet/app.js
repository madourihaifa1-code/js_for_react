class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  info() {
    return `Étudiant ${this.nom}, âgé de ${this.age} ans.`;
  }
}

const et1 = new Etudiant("Rami", 23);
console.log(et1.info());

const et2 = new Etudiant("Mohamed", 21);
console.log(et2.info());