import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

// function Note(props) {

//   function handleClick(){
//     props.onDelete(props.id)
//   }

//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button onClick={handleClick}>DELETE</button>
//     </div>
//   );
// }

export default Note;


// import "./App.css";
// import Detail from "./Detail";

// function Note(props) {
//   return (
//     <div>
//       <div className="note">
//           {/* Here we get the data from the parent App.js as a "props" property, and pass it to the Avatar.jsx child as follows: */}
//           <h1>{props.title}</h1>
//           <Detail detailInfo={props.content} />
//       </div>
//     </div>
//   );
// }

// export default Note;