import React, { useEffect, useState } from "react";
import CreateDiary from "./component/CreateDiary.jsx";
import AllDiaries from "./component/AllDiaries.jsx";

import axios from "axios";
import "./index.css";

// let App = () => {
// show and hide menu
const App = () => {
  let [view, setView] = useState("alldiaries");
  let [data, setData] = useState([]);
  let [trigger,setTrigger]=useState(false)

  let changeView = (view) => {
    setView(view);
  };
//   let getData=(diary)=> {
//     console.log(diary);
//     setData(diary);
//     };


  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, [trigger]);

let addtodiary=((diary)=>{
axios.post("http://localhost:4000/diary",diary)
setTrigger(!trigger)
setView("AllDiaries")
} 
)
// if(view===CreateDiary)
// return <CreateDiary addtodiary={addtodiary}/>

  return (
    <div>
      
      <div>
        <nav className=" nav">
          <div
            className={
              view !== "createDiary" ? "nav-unselected" : "nav-selected"
            }
            onClick={() => {
              changeView("createDiary");
            }}
          >
            Create Diary
          </div>
          <div
            className={
              view === "AllDiaries" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => {
              changeView("AllDiaries");
            }}
          >
            All Diaries
          </div>
        </nav>
      </div>
      {view === "AllDiaries" && (
        <AllDiaries
          data={data}
        //  changeView={changeView()}
        />
      )}

      {view === "createDiary" && (
        <CreateDiary
        addtodiary={addtodiary}        />
      )}
    </div>
  );
};

export default App;
