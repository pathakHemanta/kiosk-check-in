import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    // Initialize form fields and their default values
    name: "",
    email: "",
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make an API request here to send formData to the backend API
    try {
      const response = await fetch("/api/save-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Data updated successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error updating data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
