import Axios from 'axios';
import {useState} from 'react';

function Put (){
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ISBN, setISBN] = useState("");

    const Add = async () =>{
        const result = await Axios.put("http://localhost:45030/books/" + ISBN,{
            "author": author,
            "title": title,
            "description": description,
            "ISBN": ISBN
        });
        
        console.log(result.data);

    }
    return(
        <div>
            <p>Add Book:</p>
            <input type="text" value= {author} onChange={(event) => {
                setAuthor(event.target.value);
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

            <button onClick={() => Add()}>Add Book</button>
            
        </div>
    );
}

export default Put;