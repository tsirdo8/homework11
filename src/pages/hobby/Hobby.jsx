import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import hobbies from "../../hobbies";
import "./Hobby.css";

const Hobby = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the selected hobby based on the id from the URL
  const hobby = hobbies.find((h) => h.id === parseInt(id));

  if (!hobby) {
    return <div>Hobby not found!</div>;
  }

  return (
    <div className="hobby-details">
      <h1>{hobby.name}</h1>
      <p>{hobby.longDescription}</p>
      <button className="go-back-btn" onClick={() => navigate("/hobbies")}>
        Go Back
      </button>
    </div>
  );
};

export default Hobby;
