import React from "react";

// Define interface with optional props (note the `?`)
interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
  name = "Anonymous", 
  age = 0, 
  role = "Guest" 
}) => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "10px", 
      maxWidth: "250px",
      margin: "10px"
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;