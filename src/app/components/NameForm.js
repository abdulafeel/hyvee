// components/NameForm.js
import { useState } from "react";

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <button
        type="submit"
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          border: "1px solid",
          background: "lightgreen",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default NameForm;
