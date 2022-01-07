const Potion = require('../lib/Potion');


function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strenth = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.invitory = [new Potion('health'), new Potion()];
}
module.exports = Player;