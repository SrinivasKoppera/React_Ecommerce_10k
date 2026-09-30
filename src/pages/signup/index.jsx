import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const localStorageUsers = localStorage.getItem("users");

  const [users, setUsers] = useState(
    localStorageUsers ? JSON.parse(localStorageUsers) : [],
  );

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const findExistingUser = users.find(
      (user) => user.email === userData.email,
    );

    if (findExistingUser) {
      alert("User with this email already exists");
      return;
    }
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
