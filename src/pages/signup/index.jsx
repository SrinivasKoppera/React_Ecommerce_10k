import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
  );

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeInput = (event) => {
    console.log(event.target);
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <div className="signup-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={onChangeInput}
        />
      </div>
      <div className="signup-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={onChangeInput}
        />
      </div>
      <div className="signup-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={onChangeInput}
        />
      </div>
      <div className="signup-field">
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="signup-field">
        <p className="signup-field-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
