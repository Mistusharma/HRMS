import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: " ",
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "lightpink",
          padding: "20px",
          borderRadius: "8px",
          height: "30vh",
          width: "30vh",
        }}
      >
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder="Enter the firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter the lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          placeholder="Enter the email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="Enter the password"
          onChange={handleChange}
        />
        <button type="submit">signup</button>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default SignUp;
