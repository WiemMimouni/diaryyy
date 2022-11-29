import React, { useState } from "react";
import axios from "axios";
const DiariesDetails = (props) => {
  const [content, setContent] = useState("");
  return (
    <div className="blog-list-item"
      style={{ border: "3px ", margin: "auto", width: "50% , padding:10px", marginBottom:"10px" }}
 
    >
      <h4>{props.data.username}</h4>
      <p> {props.data.content} </p>
 
      <button 
        onClick={() => {
          axios.put(`http://localhost:4000/api/update/${props.data._id}`, { content });
          window.location.reload();
        }}
      >
        update
      </button>
      <input
        placeholder="Update content"
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></input> <br></br>
      <button
        onClick={() =>
          axios.delete(
            `http://localhost:4000/api/${props.data._id}`,
            window.location.reload()
          )
        }
      >
        delete
      </button>
    </div>
  );
};

export default DiariesDetails;
