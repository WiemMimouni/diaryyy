import React from "react";
import DiariesDetails from "./DiariesDetails.jsx"

const AllDiaries = (props) => {
  console.log(props, "el props");
    
   return ( 
     <> 
     {console.log(props.data)}
   {props.data.map((e,i)=>(
     

     <DiariesDetails data={e} changeView={props.changeView} />

    
   ))}
    </>
 
  )

};


export default AllDiaries ;