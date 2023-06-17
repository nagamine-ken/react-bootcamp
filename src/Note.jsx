import "./App.css";
import Avatar from "./Avatar";
import Detail from "./Detail";

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
        <Detail detailInfo={props.phone}/>
        <Detail detailInfo={props.email}/>
        
        </div>
      </div>
    </div>
  );
}

export default Note;