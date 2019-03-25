import {Pokemon} from "./Pokemon";
import {firstAttack} from "./firstAttack";

let pokemonOne = new Pokemon("Pikachu", 55, 40, 35, 90)
let pokemonTwo = new Pokemon("Charmander", 52, 43, 39, 65)

var pokemonArray = firstAttack(pokemonOne, pokemonTwo);

var count = 0;

console.log("DEBUT DU COMBAT")
console.log(pokemonArray[0].name + " commence.")

while(pokemonArray[0].health > 0 && pokemonArray[1].health > 0) {
    var first = (0 + count) % 2;
    var second = (1 + count) % 2;
    pokemonArray[first].fight(pokemonArray[second]);

    if(pokemonArray[second].health <= 0) {
        console.log(pokemonArray[first].name + " a gagné.")
    } else {
        count++;
    }
}

console.log("FIN DU COMBAT")