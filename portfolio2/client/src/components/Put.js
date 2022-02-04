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
            <span>
            <p>Director</p>
            <input type="text" value= {director} onChange={(addDirector) => {
                setDirector(addDirector.target.value);
            }} />
            <p>Movie Title</p>
            <input type="text" value= {title} onChange={(addTitle) => {
                setTitle(addTitle.target.value);
            }} />
            <p>Short description</p>
            <input type="text" value= {description} onChange={(addDesc) => {
                setDescription(addDesc.target.value);
            }} />
            <p>List Number </p>
            <input type="text" value= {ISBN} onChange={(addNum) => {
                setISBN(addNum.target.value);
            }} />
            </span>
            
            <button onClick={() => {Add()}}>Add Movie</button>
            
        </div>
    );
}

export default Put;