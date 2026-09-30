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
    email: "",
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

    const user = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="login-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
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
