import "./App.css";
import Avatar from "./Avatar";

function Note(props) {
  return (
    <div>
      {/* <h1 className="heading">My Contacts</h1> */}

      <div className="card">

        <div className="top">
          <h2 className="name">{props.name}</h2>
          {/* Here we get the data from the parent App.js as a "props" property, and pass it to the Avatar.jsx child as follows: */}
          <Avatar imgURL={props.imgURL} />
        </div>

        <div className="bottom">
          <p className="info">Phone: {props.tel}</p>
          <p className="info">Email: {props.email}</p>
        </div>

      </div>
    </div>
  );
}

export default Note;