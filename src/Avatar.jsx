import "./App.css";

function Avatar(props) {
    return (
            <img
              className="circle-img"
              src={props.imgURL} alt="profile pic"
            />
    );
  }

export default Avatar;