import "./App.css";
import Input from "./Input";

function Login(props) {
  return (
    //    <p className="info">{props.detailInfo}</p>
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
