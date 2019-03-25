"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, attack, defense, health, speed) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.speed = speed;
    }
    Pokemon.prototype.fight = function (pokemon) {
        var damage = this.attack - pokemon.defense;
        console.log(this.name + " inflige " + damage + " de dégats à " + pokemon.name);
        if (damage < 0)
            damage = 1;
        pokemon.health -= damage;
        if (pokemon.health < 0)
            pokemon.health = 0;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
