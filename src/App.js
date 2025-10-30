import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    setFiltered(
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(lowerQuery) ||
          u.username.toLowerCase().includes(lowerQuery)
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">User Directory</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="user-grid">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;

