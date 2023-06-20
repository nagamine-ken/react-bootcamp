import "./App.css";

function LoginInput(props) {
    return (<div>
           {/* <p className="info">{props.detailInfo}</p> */}
           <input type="text" placeholder="Username" />
           <input type="password" placeholder="Password" /></div>
    );
  }

export default LoginInput;