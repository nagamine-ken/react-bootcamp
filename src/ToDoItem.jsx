import React from "react";
import "./App.css";

// function ToDoItem(props) {
//   return (
//     <div
//       onClick={() => {
//         props.onChecked(props.id);
//       }}
//     >
//       <li>{props.text}</li>
//     </div>
//   );
// }



function ToDoItem(props) {

  return (
    <li onClick={() => {
        props.onChecked(props.id)
    }}>
      {props.text}
    </li>
  );
}


export default ToDoItem;
