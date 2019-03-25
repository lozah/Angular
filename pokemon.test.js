"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./Pokemon");
describe('damage dealt', function () {
    it('Pikachu should deal 12 damage against charmander leaving him at 27 hp', function () {
        var pikachu = new Pokemon_1.Pokemon("Pikachu", 55, 40, 35, 90);
        var charmander = new Pokemon_1.Pokemon("Charmander", 52, 43, 39, 65);
        pikachu.fight(charmander);
        expect(charmander.health).toEqual(27);
    });
    it('Charmander should be at 0 hp after 5 pikachu attacks', function () {
        var pikachu = new Pokemon_1.Pokemon("Pikachu", 55, 40, 35, 90);
        var charmander = new Pokemon_1.Pokemon("Charmander", 52, 43, 39, 65);
        pikachu.fight(charmander);
        pikachu.fight(charmander);
        pikachu.fight(charmander);
        pikachu.fight(charmander);
        pikachu.fight(charmander);
        expect(charmander.health).toEqual(0);
    });
});
