import React from "react";
import parse from "html-react-parser"

const OnePost = (props) => {
    console.log(props);
  return (

  <div className="blog-list-item" >
    <div className="blog-list-item-title">{props.data.title}</div>
    <div className="blog-list-item-byline"> 
      <span className="blog-list-item-byline-author">{props.data.content}</span>
      some time ago
    </div>
    {props.data.content && <div className="blog-list-item-lede">{parse(props.data.content)}</div>}
    {props.data.imageUrl && <div className="blog-list-item-lede"> <img src={props.data.imageUrl} alt="no content" /> </div>  }
  </div>
  )
};

export default OnePost;