export class Pokemon {
    public name;
    public attack;
    public defense;
    public health;
    public speed;
    constructor(name, attack, defense, health, speed) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.speed = speed;
    }

     fight(pokemon):void {
        var damage = this.attack - pokemon.defense;
         console.log(this.name + " inflige " + damage + " de dégats à " + pokemon.name)

         if(damage < 0) damage = 1;
        pokemon.health -= damage;
        if(pokemon.health < 0) pokemon.health = 0;
    }
}
