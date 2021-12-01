import Axios from 'axios';
import {useState} from 'react';

function Put (){
    const [director, setDirector] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ISBN, setISBN] = useState("");

    const Add = async () =>{
        const result = await Axios.put("http://localhost:45030/MovieLibrary/" + ISBN,{
            "director": director,
            "title": title,
            "description": description,
            "ISBN": ISBN
        });
        
        console.log(result.data);

    }
    return(
        <div>
            <h2>Save a Movie:</h2>
            <input type="text" value= {director} onChange={(event) => {
                setDirector(event.target.value);
            }} />
            <input type="text" value= {title} onChange={(event) => {
                setTitle(event.target.value);
            }} />
            <input type="text" value= {description} onChange={(event) => {
                setDescription(event.target.value);
            }} />
            <input type="text" value= {ISBN} onChange={(event) => {
                setISBN(event.target.value);
            }} />

            <button onClick={() => {Add()}}>Add Movie</button>
            
        </div>
    );
}

export default Put;