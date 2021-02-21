/**
  Create a component called Search
Should use state
Should use <input type="text" /> or a combination of <input type="text" /> and <button>
Should use axios and the Pokemon API (see Lab 2 for reminder)
Should show the result of a search:
If successful, show Pokemon component
If not successful, show "Not found!"
 */

import Axios from 'axios';
import {useState} from 'react';
import Pokemon from '../Pokemon';


function Search(){
    const [search, setSearch] = useState ("");

    const [pokemon, setPokemon] = useState ({});

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


        function searchPokemon(){

                setLoading(true);
                
                Axios('https://pokeapi.co/api/v2/pokemon/' + search)
                
                .then( (response) => {
                    
                    setPokemon(response.data);

                    setLoading(false);
        
                })
        
                .catch(() => {
                
                    setError("Not Found");
                });
        }

        return(
            <div>
                <input type="text" onChange={(event) => {
                    
                    setSearch(event.target.value);
                }} />
                <button onClick={() => searchPokemon()}>Search</button>
                {
                    <p>Searched: {search}</p>
                }
                <div>
                    {
                        (loading == true) ? (
                            <div>
                                <p>{error}</p>

                                <p>Loading...</p>
                            </div>

                        ) : (

                            <div>

                                <Pokemon name = {pokemon.name}

                                id = {pokemon.id}

                                sprites = {pokemon.sprites.front_default} />

                            </div>
                        ) 
                    }
                </div>
            </div>
        );
}


export default Search;