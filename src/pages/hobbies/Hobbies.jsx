import "./Hobbies.css"; 
import React from "react";
import { useNavigate } from "react-router-dom";
import hobbies from "../../hobbies"; 

const Hobbies = () => {
  const navigate = useNavigate();

  const handleShowMore = (id) => {
    navigate(`/hobbies/${id}`); 
  };

  return (
    <div className="hobbies-container">
      {hobbies.map((hobby) => (
        <div className="hobby-cube" key={hobby.id}>
          <div className="hobby-name">{hobby.name}</div>
          <div className="hobby-description">
            {hobby.description.substring(0, 50)}...
          </div>
          <button
            className="show-more-btn"
            onClick={() => handleShowMore(hobby.id)}
          >
            Show More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
