export function firstAttack(pokemonOne, pokemonTwo) {

    if(pokemonOne.speed > pokemonTwo.speed) {
        return [pokemonOne, pokemonTwo];
    } else if(pokemonOne.speed < pokemonTwo.speed) {
        return [pokemonTwo, pokemonOne];
    }
}
