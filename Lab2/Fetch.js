import axios from 'axios';
import chalk from 'chalk';

class Fetch{
    constructor (pokemon, color){
        this.pokemon = pokemon;
        this.color = color;

    }
    fetch(){
        // Fetch this URL
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
        // And then...
        .then( (response) => {
            // Use the 'data'
            const pokeapi = response.data;
            console.log(chalk.hex(this.color)("This is a " + pokeapi.name + " and its ID is " + pokeapi.id));

        })

        .catch((error) => {
            // handle error
            console.log(chalk.red("Error: " + error));
        });
    }
}
    



export default Fetch;