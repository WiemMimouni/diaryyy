
import React,  {useState} from 'react'
import axios from 'axios'

let CreateDiary=(props)=> {
console.log(props);
const [content, setContent] = useState("");
const [username,setusername] = useState("")



  return (
    <div id='body'>
       
    
    <div className="blog-list-item">
   <h1 className="New-Post-Title">New Diary</h1>
   <form className="New-Post-Form">
        <input onChange={(event)=>setusername(event.target.value)}
        id="title"
        type="text"
        className="search"
        placeholder="Title"
        
        minLength="3"
        defaultValue={username}
      />
        <textarea onChange={(event)=> setContent(event.target.value)}
        id="content"
        className="post "
        placeholder="Content..."
        required
        minLength="20"
        defaultValue={content}
      />
       <button id='add' onClick={()=> props.addtodiary({username,content})}>Add Diary</button>
      

       


       

         
        

        
        </form>
    </div>
    </div>
)}
export default CreateDiary;


