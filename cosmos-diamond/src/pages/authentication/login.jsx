import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={() => {
          /* handle forgot password */
        }}
      >
        Forgot Password
      </button>
      <Link to="/register">Don't have an account? Register</Link>
    </div>
  );
};

export default Login;
