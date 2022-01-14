const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function  Game () {
this.roundNumber = 0;
this.isPlayerTurn = false;
this.enimies = [];
this.currentEnemy;
this.player;
}
Game.prototype.initializeGame = function () {
this.enimies.push(new Enemy('goblin', 'sword'));
this.enimies.push(new Enemy('orc', 'baseball bat'));
this.enimies.push(new Enemy('skeleton', 'axe'));
this.currentEnemy = this.enimies[0];
inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
})
// destructure name from the prompt object
.then(({ name }) => {
    this.player = new Player(name);
    // test the object creation
    console.log(this.startNewBattle(), this.player);
});

};

module.exports = Game;