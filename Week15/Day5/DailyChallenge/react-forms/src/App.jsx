import { useState } from "react";
import FormComponent from "./FormComponent";
import "./index.css"; // Import the CSS file

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      ...(formData.lactoseFree && { lactoseFree: "on" }),
    }).toString();

    const url = `http://localhost:3000/?${queryParams}`;
    window.location.href = url;
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>Sample Form</h2>
        <FormComponent
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="display-section">
        <h2>Entered Data</h2>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Destination:</strong> {formData.destination}</p>
        <p><strong>Lactose Free:</strong> {formData.lactoseFree ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App; //output: http://localhost:3000/?firstName=Daniel&lastName=Lewin&age=31&gender=male&destination=Japan


