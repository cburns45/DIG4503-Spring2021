import Axios from 'axios';
import {useState} from 'react';

function Get (){
    const [search, setSearch] = useState('');

    const Searching = async ()=> {
       const result = await Axios.get("http://localhost:45030/books/" + search)

        if (result != null){
            console.log(result.data);
        } else {
            console.log("not found");
        }
    }

    return(
        <div>
            <p>Search Book by ISBN</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => Searching()}>Search</button>
        </div>
    );
}

export default Get;