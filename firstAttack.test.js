"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./Pokemon");
var firstAttack_1 = require("./firstAttack");
describe('first to attack', function () {
    it('Pikachu should attack first when against charmander', function () {
        var pikachu = new Pokemon_1.Pokemon("Pikachu", 55, 40, 35, 90);
        var charmander = new Pokemon_1.Pokemon("Charmander", 52, 43, 39, 65);
        expect(firstAttack_1.firstAttack(pikachu, charmander)).toEqual([pikachu, charmander]);
    });
});
