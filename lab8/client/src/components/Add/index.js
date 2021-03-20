import Axios from 'axios';
import {useState} from 'react';

function Add (){
    const [search, setSearch] = useState("");

    function Adding () {
        Axios.put("http://localhost:45030/people/" + search)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log("The error was " + error);
        })
    }

    return(
        <div>
            <p>Add Name:</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => Adding()
            }>Add</button>
            {
                <p>Result {search}</p>
            }
        </div>
    );
}

export default Add;
