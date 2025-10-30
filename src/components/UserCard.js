import React from "react";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import "../App.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt={user.name}
        className="user-avatar"
      />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-username">@{user.username}</p>

      <div className="user-info">
        <p>
          <FaEnvelope className="icon" /> {user.email}
        </p>
        <p>
          <FaPhone className="icon" /> {user.phone}
        </p>
        <p>
          <FaGlobe className="icon" />{" "}
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;


