import { useContext, useState } from "react";
import "./App.css";
import UserContext from "./context/userContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  console.log("🚀 ~ file: App.jsx:9 ~ App ~ setUser:", setUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setUser({
      username,
      password,
    });
  };
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
      <div>
        <h1>{user?.username}</h1>
        <p>{user?.password && "user logged in."}</p>
      </div>
    </>
  );
}

export default App;
