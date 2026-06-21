import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tun Pipe Shop Logo" className="logo" />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
