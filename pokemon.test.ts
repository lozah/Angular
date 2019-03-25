import {Pokemon} from "./Pokemon";

describe('damage dealt', () => {
    it('Pikachu should deal 12 damage against charmander leaving him at 27 hp', () => {
        let pikachu = new Pokemon("Pikachu", 55, 40, 35, 90)
        let charmander = new Pokemon("Charmander", 52, 43, 39, 65)
        pikachu.fight(charmander)
        expect(charmander.health).toEqual(27)
    })
    it('Charmander should be at 0 hp after 5 pikachu attacks', () => {
        let pikachu = new Pokemon("Pikachu", 55, 40, 35, 90)
        let charmander = new Pokemon("Charmander", 52, 43, 39, 65)
        pikachu.fight(charmander)
        pikachu.fight(charmander)
        pikachu.fight(charmander)
        pikachu.fight(charmander)
        pikachu.fight(charmander)
        expect(charmander.health).toEqual(0)
    })
})