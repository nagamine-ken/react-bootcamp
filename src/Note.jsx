import "./App.css";

function Note(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <div className="card">

        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className="circle-img"
            src={props.img} alt="jenny black pink"
          />
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