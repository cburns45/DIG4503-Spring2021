import Axios from 'axios';
import {useState} from 'react';

function Delete (){
    const [search, setSearch] = useState('');

    const Deleting = async ()=> {
       const result = await Axios.delete("http://localhost:45030/books/" + search)
            console.log(result.data);
        
    }

    return(
        <div>
            <p>Delete Book by ISBN</p>
            <input type="text"  onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => Deleting()}>Delete</button>


        </div>

        
    );
}

export default Delete;