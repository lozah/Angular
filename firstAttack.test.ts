import {Pokemon} from "./Pokemon";
import {firstAttack} from "./firstAttack";


describe('first to attack', () => {
    it('Pikachu should attack first when against charmander', () => {
        let pikachu = new Pokemon("Pikachu", 55, 40, 35, 90)
        let charmander = new Pokemon("Charmander", 52, 43, 39, 65)
        expect(firstAttack(pikachu, charmander)).toEqual([pikachu, charmander])
    })
})

