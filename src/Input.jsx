import "./App.css";

function Input(props) {
  return (
    //    <p className="info">{props.detailInfo}</p>
        <input type={props.type} placeholder={props.placeholder} />
  );
}

export default Input;