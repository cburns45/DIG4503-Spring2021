import Fetch from './Fetch.js';

const pokemon = new Fetch('charmander', '#00FFFF');

const pokemon2 = new Fetch('null', 'null');

pokemon.fetch();

pokemon2.fetch();