class Hero {
  constructor(type) {
    this.type = type;
  }

  attack() {
    const attackTypes = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    };

    const attackType = attackTypes[this.type];
    console.log(attackType)

    if (attackType) {
      console.log(`O ${this.type} atacou o inimigo usando ${attackType}`);
    } else {
      console.log("Herói não encontrado!");
    }
  }
}

let mago = new Hero("mago").attack();
let guerreiro = new Hero("guerreiro").attack();
let monge = new Hero("monge").attack();
let ninja = new Hero("ninja").attack();



