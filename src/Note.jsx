import "./App.css";
import Detail from "./Detail";

function Note(props) {
  return (
    <div>
      <div className="note">
          {/* Here we get the data from the parent App.js as a "props" property, and pass it to the Avatar.jsx child as follows: */}
          <h1>{props.title}</h1>
          <Detail detailInfo={props.content} />
      </div>
    </div>
  );
}

export default Note;
