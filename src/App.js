import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsContent from "./components/FriendsContent";
import AddFriendForm from "./components/AddFriendForm";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
        <li>
          <Link to="/add-friend">Add Friend</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/protected" element={<FriendsContent />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/add-friend" element={<AddFriendForm />} />
      </Routes>
    </div>
  );
}

export default App;
