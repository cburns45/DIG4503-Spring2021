import Axios from 'axios';
import {useState} from 'react';

function Get (){
    const [search, setSearch] = useState('');

    const Searching = async ()=> {
       const result = await Axios.get("http://localhost:45030/ConnorBurns/" + search)

        if (result != null){
            console.log(result.data);
        } else {
            console.log("not found");
        }
    }

    return(
        <div>
            <h2>Search movie by ISBN number</h2>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => Searching()}>Search</button>
        </div>
    );
}

export default Get;