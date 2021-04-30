import Axios from 'axios';
import {useState} from 'react';

function Update (){
    const [director, setDirector] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ISBN, setISBN] = useState("");

    const updateMovie = async () =>{
        const result = await Axios.patch("http://localhost:45030/ConnorBurns/" + ISBN,{
            "director": director,
            "title": title,
            "description": description,
            "ISBN": ISBN
        });
        
        console.log(result.data);

    }
    return(
        <div>
            <h2>Update a Movie:</h2>
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

            <button onClick={() => {updateMovie()}}>Update Movie</button>
            
        </div>
    );
}

export default Update;