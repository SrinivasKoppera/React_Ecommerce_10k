import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
  );

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => {
      if (
        user.email === loginData.email &&
        user.password === loginData.password
      ) {
        return true;
      }
      return false;
    });

    if (user) {
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="login-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginData.username}
          onChange={onChangeInput}
        />
      </div>
      <div className="login-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={onChangeInput}
        />
      </div>
      <div className="login-field">
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="login-field">
        <p className="login-field-text">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
