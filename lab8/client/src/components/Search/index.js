import Axios from 'axios';
import {useState} from 'react';

function Search (){
    const [search, setSearch] = useState('');

    function Searching () {
        Axios.get("http://localhost:45030/people/" + search)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log("The error was " + error);
        })
    }

    return(
        <div>
            <p>Search Name</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => Searching()
            }>Search</button>
            {
                <p>Result {search}</p>
            }
        </div>
    );
}

export default Search;
