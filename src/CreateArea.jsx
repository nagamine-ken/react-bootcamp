import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value,
//       };
//     });
//   }

//   function submitNote(event) {
//     //This will trigger the addNote() function in its parent component.
//     //this is also how you pass the "note" state up to the App parent component:
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: "",
//     });
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form>
//         <input
//           onChange={handleChange}
//           name="title"
//           value={note.title}
//           placeholder="Title"
//         />
//         <textarea
//           onChange={handleChange}
//           name="content"
//           value={note.content}
//           placeholder="Take a note..."
//           rows="3"
//         />
//         <button onClick={submitNote}>Add</button>
//       </form>
//     </div>
//   );
// }

export default CreateArea;
