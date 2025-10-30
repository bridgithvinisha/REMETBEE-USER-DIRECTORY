import React from "react";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        width: "260px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.2s",
      }}
      className="user-card"
    >
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "3px solid #6b46c1",
          marginBottom: "10px",
        }}
      />
      <h3>{user.name}</h3>
      <p style={{ color: "#666" }}>@{user.username}</p>
      <div style={{ marginTop: "10px", textAlign: "left" }}>
        <p><FaEnvelope /> {user.email}</p>
        <p><FaPhone /> {user.phone}</p>
        <p><FaGlobe /> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      </div>
    </div>
  );
};

export default UserCard;

