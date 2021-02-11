import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "2c797699-5825-4c1c-b14e-9cc43678ea07",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      seterror("");
    } catch (error) {
      seterror("oops , incorrect credentials ");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
